import { css } from 'styled-components';

type flexkey = 'start' | 'end' | 'between' | 'around' | 'stretch' | 'center';

interface flexBoxProps {
  flex?: string;
  fd?: string;
  jc?: flexkey;
  ai?: flexkey;
}

type ellipsisProps = 1 | 2;

const getFlexValue = (key: flexkey): string => {
  const flexmap = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    stretch: 'stretch',
    center: 'center',
  };

  return flexmap[key];
};

export const flexbox = ({
  flex = 'flex',
  fd = 'row',
  jc = 'center',
  ai = 'center',
}: flexBoxProps) => {
  return css`
    display: ${flex};
    flex-direction: ${fd};
    justify-content: ${getFlexValue(jc)};
    align-items: ${getFlexValue(ai)};
  `;
};

export const alignMiddle = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ellipsis = (line: ellipsisProps) => {
  if (line === 1) {
    return css`
      display: block;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
    `;
  } else {
    return css`
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${line};
      white-space: initial;
    `;
  }
};

export const hideScrollbar = () => css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const removeTextPointer = () => css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
