export default interface axiosResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
