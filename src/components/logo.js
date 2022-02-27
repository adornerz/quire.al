/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoDark from 'assets/logo.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: '7rem'
      }}
    >
      <Image src={LogoDark} alt="Quire"/>
    </Link>
  );
}
