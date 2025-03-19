import axios from "axios";

export const setUpInterceptors = (instance: any) => {
  /** Authorization */
  instance.interceptors.request.use(
    (config: any) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error: any) => Promise.reject(error)
  );

  /** Refresh Token */
  instance.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          /** Get Refresh Token */
          const res = await axios.post(
            `${process.env.REACT_APP_ACCOUNT_SERVICE_URL}/account/refresh-token`,
            {},
            { withCredentials: true }
          );

          const newAccessToken = res.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return instance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem("accessToken");

          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
};
