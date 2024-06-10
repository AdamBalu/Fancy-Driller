import MillionLint from '@million/lint';
/** @type {import("next").NextConfig} */
const config = {};
export default MillionLint.next({
  rsc: true
})(config);