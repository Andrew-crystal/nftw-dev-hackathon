export default class Utils {

  static get baseUrl() {
    const inDev = process.env.NODE_ENV !== 'production';
    const dev = process.env.NEXT_PUBLIC_DEV_URL;
    const prod = process.env.NEXT_PUBLIC_PROD_URL;
    return inDev ? dev : prod;
  }

  static get dateFormatOptions() {
    return { year: 'numeric', month: 'long', day: 'numeric' };
  }
}
