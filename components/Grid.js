import styled, { css } from 'styled-components';
import media from './Media';

const SPACING = 25;
const colCommon = `
padding-left: ${SPACING}px;
padding-right: ${SPACING}px;
width: 100%;
position: relative;
min-height: 1px;
`;

const colSize = (size) => {
  if (Number.isInteger(size) && size >= 1 && size <= 12) {
    return `
    -ms-flex: 0 0 ${(100 * size) / 12}%;
    flex: 0 0 ${(100 * size) / 12}%;
    max-width: ${(100 * size) / 12}%;
    `;
  }
  return `
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  max-width: 100%;`;
};


const colOffset = (size) => Number.isInteger(size) && size >= 1 && size <= 12 && `
margin-left: ${(100 * size) / 12}%;
`;

const startCol = `
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
text-align: start;
`;
const centerCol = `
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
text-align: center;
`;
const endCol = `
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
text-align: end;
`;

const topCol = `
-webkit-box-align: start;
-ms-flex-align: start;
align-items: flex-start;
`;
const middleCol = `
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;
const bottomCol = `
-webkit-box-align: end;
-ms-flex-align: end;
align-items: flex-end;
`;
const aroundCol = `
  -ms-flex-pack: distribute;
  justify-content: space-around;
`;

const betweenCol = `
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  `;
const firstCol = `
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
  `;
const lastCol = `
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
`;

const dNone = `
  display: none !important;
`;

const dInline = `
  display: inline !important;
`;

const dInlineBlock = `
  display: inline-block !important;
`;

const dBlock = `
  display: block !important;
`;

const dTable = `
  display: table !important;
`;

const dTableRow = `
  display: table-row !important;
`;

const dTableCell = `
  display: table-cell !important;
`;

const dFlex = `
  display: flex !important;
`;

const dInlineFlex = `
  display: inline-flex !important;
`;

const flexboxgrid = (props) => css`
${(props.container || props.containerFluid) && `
margin-right: auto;
margin-left: auto;
width: 100%;
padding-right: ${SPACING}px;
padding-left: ${SPACING}px;
`}

${props.row && `
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-right: -${SPACING}px;
  margin-left: -${SPACING}px;
`}

${props.row && props.reverse && `
-webkit-box-orient: horizontal;
-webkit-box-direction: reverse;
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
`}

${props.row && props.noGutters && `
  margin-left: 0;
  margin-right: 0;
  > div {
    padding-left: 0;
    padding-right: 0;
  }
`}

${(props.colXs || props.colXsOffset) && colCommon}

${props.colXs && colSize(props.colXs)}

${props.colXsOffset && colOffset(props.colXsOffset)}


${props.startXs && startCol}

${props.centerXs && centerCol}

${props.endXs && endCol}

${props.topXs && topCol}

${props.middleXs && middleCol}

${props.bottomXs && bottomCol}

${props.aroundXs && aroundCol}

${props.betweenXs && betweenCol}

${props.firstXs && firstCol}

${props.lastXs && lastCol}

${(props.dNone || props.dNoneXs) && dNone}
${(props.dBlock || props.dBlockXs) && dBlock}
${(props.dInlineBlock || props.dInlineBlockXs) && dInlineBlock}
${(props.dInline || props.dInlineXs) && dInline}
${(props.dTable || props.dTableXs) && dTable}
${(props.dTableRow || props.dTableRowXs) && dTableRow}
${(props.dTableCell || props.dTableCellXs) && dTableCell}
${(props.dFlex || props.dFlexXs) && dFlex}
${(props.dInlineFlex || props.dInlineFlexXs) && dInlineFlex}

${media.sm`

${props.container && 'max-width: 720px;'}

${(props.colSm || props.colSmOffset) && colCommon}

${props.colSm && colSize(props.colSm)}

${props.colSmOffset && colOffset(props.colSmOffset)}

${props.startSm && startCol}

${props.centerSm && centerCol}

${props.endSm && endCol}

${props.topSm && topCol}

${props.middleSm && middleCol}

${props.bottomSm && bottomCol}

${props.aroundSm && aroundCol}

${props.betweenSm && betweenCol}

${props.firstSm && firstCol}

${props.lastSm && lastCol}

${props.dNoneSm && dNone}
${props.dBlockSm && dBlock}
${props.dInlineBlockSm && dInlineBlock}
${props.dInlineSm && dInline}
${props.dTableSm && dTable}
${props.dTableRowSm && dTableRow}
${props.dTableCellSm && dTableCell}
${props.dFlexSm && dFlex}
${props.dInlineFlexSm && dInlineFlex}


`}

${media.md`

${props.container && 'max-width: 960px;'}

${(props.colMd || props.colMdOffset) && colCommon}

${props.colMd && colSize(props.colMd)}

${props.colMdOffset && colOffset(props.colMdOffset)}

${props.startMd && startCol}

${props.centerMd && centerCol}

${props.endMd && endCol}

${props.topMd && topCol}

${props.middleMd && middleCol}

${props.bottomMd && bottomCol}

${props.aroundMd && aroundCol}

${props.betweenMd && betweenCol}

${props.firstMd && firstCol}

${props.lastMd && lastCol}

${props.dNoneMd && dNone}
${props.dBlockMd && dBlock}
${props.dInlineBlockMd && dInlineBlock}
${props.dInlineMd && dInline}
${props.dTableMd && dTable}
${props.dTableRowMd && dTableRow}
${props.dTableCellMd && dTableCell}
${props.dFlexMd && dFlex}
${props.dInlineFlexMd && dInlineFlex}

`}

${media.lg`

${props.container && 'max-width: 1140px;'}

${(props.colLg || props.colLgOffset) && colCommon}

${props.colLg && colSize(props.colLg)}

${props.colLgOffset && colOffset(props.colLgOffset)}

${props.startLg && startCol}

${props.centerLg && centerCol}

${props.endLg && endCol}

${props.topLg && topCol}

${props.middleLg && middleCol}

${props.bottomLg && bottomCol}

${props.aroundLg && aroundCol}

${props.betweenLg && betweenCol}

${props.firstLg && firstCol}

${props.lastLg && lastCol}

${props.dNoneLg && dNone}
${props.dBlockLg && dBlock}
${props.dInlineBlockLg && dInlineBlock}
${props.dInlineLg && dInline}
${props.dTableLg && dTable}
${props.dTableRowLg && dTableRow}
${props.dTableCellLg && dTableCell}
${props.dFlexLg && dFlex}
${props.dInlineFlexLg && dInlineFlex}

`}

`;
export const Div = styled.div`
${flexboxgrid}
`;
export default Div;
