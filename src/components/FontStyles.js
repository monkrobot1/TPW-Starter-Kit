import React from 'react';
import Styled from 'styled-components';
import { Heading, Text, Link } from 'rebass/styled-components';
import colorPalette from '../themes/colorPalette';

// base theme specs (in pixels)
// space: [0, 4, 8, 16, 32, 64, 128],
// fontSizes: [12, 14, 16, 20, 24, 36, 48],

export const H1 = props => (
  <Heading {...props} as="h1">
    {props.children}
  </Heading>
);

export const H2 = props => (
  <Heading {...props} as="h2">
    {props.children}
  </Heading>
);

export const H3 = props => (
  <Heading {...props} as="h3">
    {props.children}
  </Heading>
);

export const H4 = props => (
  <Heading {...props} as="h4">
    {props.children}
  </Heading>
);

export const Display2 = Styled(H1)`

font-size: ${props => props.theme.fontSizes[6]}px;
line-height: 60px;
font-weight: ${props => props.theme.headingWeight};
font-family: ${props => props.theme.font};
padding: 0;
color: ${props => props.theme.colors.primaryFont};
`;

export const Display1 = Styled(H1)`

font-size: ${props => props.theme.fontSizes[5]}px;
line-height:  44px;
font-weight: ${props => props.theme.headingWeight};

padding: 0;
color: ${props => props.theme.colors.primaryFont};

`;

export const Headline = Styled(H2)`

font-size: ${props => props.theme.fontSizes[4]}px;
line-height: 32px;
font-weight: ${props => props.theme.headingWeight};
font-family: ${props => props.theme.font};
color: ${props => props.theme.colors.primaryFont};
`;

export const Title = Styled(H3)`

font-size: 18px;
line-height:  30px;
font-weight: ${props => props.theme.headingWeight};
font-family: ${props => props.theme.font};
color: ${props => props.theme.colors.primaryFont};
`;

export const Subheading = Styled(H4)`

font-size: ${props => props.theme.fontSizes[2]}px;
line-height: 28px;
font-weight: ${props => props.theme.headingWeight};
font-family: ${props => props.theme.font};
color: ${props => (props.color ? props.color : props => props.theme.colors.primaryFont)};


`;
export const Body2 = Styled(Text)`

font-size: ${props => props.theme.fontSizes[2]}px;
line-height: 28px;
font-family: ${props => props.theme.font};
color: ${props => props.theme.colors.primaryFont};
margin-block-start: 0em;
margin-block-end: 1em;
&.m0 {
  margin: 0;
}

`;

export const Body1 = Styled(Text)`

font-size: ${props => props.theme.fontSizes[1]}px;
line-height: 24px;
font-family: ${props => props.theme.font};
margin-block-start: 1em;
margin-block-end: 1em;
margin-bottom: 1em;
color: ${props => (props.color ? props.color : props.theme.colors.primaryFont)};

`;

export const Caption = Styled(Text)`

font-size: ${props => props.theme.fontSizes[0]}px;
line-height: 20px;
font-family: ${props => props.theme.font};
color: ${props => (props.color ? props.color : props.theme.colors.primaryFont)};

`;

export const TextLinkDisabled = Styled(Text)`
color: ${props => props.theme.colors.linkFont};
cursor: pointer;
line-height: 20px;
&:hover {
  color: ${props => props.theme.colors.linkFont};
  text-decoration: none;
}
font-family: ${props => props.theme.font};

`;

export const TextLinkStyle = Styled(Link)`
color: ${props => props.theme.colors.primaryFont};
&:hover {
  color: ${props => props.theme.colors.linkFont};
  text-decoration: none;
}
font-family: ${props => props.theme.font};
`;

export const ButtonFont = Styled(Text)`

font-size: ${props => props.theme.fontSizes[2]}px;
font-weight: 400;
line-height: 14px;
font-family: ${props => props.theme.font};
padding: ${props => props.theme.space[0]}px ${props => props.theme.space[2]}px;
height: auto;

`;

export const BlockQuote = Styled.blockquote`

border-left: ${props => props.theme.border};
font-weight: normal;
margin-left: 0;
padding-left: 32px;
border-width: 4px;
border-color: ${colorPalette.colors.indigos[4]};
& div:last-child {
  margin-bottom: 0;
}
`;
export const BadgeFont = Styled(Text)`

font-size: ${props => props.theme.fontSizes[0]}px;
font-weight: 500;
line-height: 12px;
font-family: BasisMono;
padding: 2px ${props => props.theme.space[1]}px 3px ${props => props.theme.space[1]}px ;
height: auto;
text-transform: uppercase;
vertical-align: baseline;
`;
