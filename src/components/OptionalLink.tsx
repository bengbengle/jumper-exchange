import { Box, Link as MuiLink, type CSSObject } from '@mui/material';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

interface OptionalLinkProps {
  href?: string;
  ariaLabel?: string;
  sx?: CSSObject;
}

export const OptionalLink: React.FC<
  PropsWithChildren<OptionalLinkProps & { disabled: boolean }>
> = (props) => {
  if (props?.disabled) {
    return <Box sx={{ cursor: 'not-allowed' }}>{props.children}</Box>;
  } else if (props.href) {
    return (
      <MuiLink
        component={Link}
        href={props.href}
        aria-label={props.ariaLabel}
        style={{
          textDecoration: 'inherit',
          ...(props.sx as React.CSSProperties),
        }}
      >
        {props.children}
      </MuiLink>
    );
  } else {
    return props.children;
  }
};
