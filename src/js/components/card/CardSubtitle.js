import React from "react";

const CardSubtitleText = props => pug`
  span.card-text_span= props.text
`;

export default function CardSubtitle(props) {
  return pug`
    h4.card-subtitle
      CardSubtitleText(text="2019, Боевик, драма, биография")
      //- CardSubtitleText(text=props.data.date + ", " + props.data.genre)
      //- CardSubtitleText(text=props.data.translate)
      span.badge.card-row_elem.card-row_elem--d_inline_block.card-subtitle_badge.order-md-first 16+
      span.card-text_gradient_hidden.card-subtitle_gradient_hidden
  `;
}
