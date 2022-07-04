import { LoadingOuter, LoadingInner, LoadingDot } from './styles.js';

export default function Loader() {
  return (
    <LoadingOuter>
      <LoadingInner>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingInner>
    </LoadingOuter>
  );
}
