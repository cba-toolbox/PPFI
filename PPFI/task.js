/* 課題に関するコードを以下に書く */

var text_page = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: '<div style="text-align: left;"><b>目標選択</b>: 少しの間，あなたが取り組んでいる重要な目標について考えてみてください。<br>この目標はあなたの人生におけるどんな領域でもかまいませんが，ただ1つの目標に限定してください。<br>あまり急がず，少し時間をかけて考えて選んでください。<br>目標を選んだら，次の空欄に書き出して下さい。</div>', rows: 5, required: true, name: 'goal'}
  ],
  button_label: '次へ',
  on_load: function() {
    const style = document.createElement('style');
    style.innerHTML = `
      textarea {
        max-width: 95vw !important;
        width: 100% !important;
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);
  }
}

/* 件法の設定 */
const scale = [
    '1.まったくそう思わない',
    '2.そう思わない',
    '3.あまりそう思わない',
    '4.どちらともいえない',
    '5.少しそう思う',
    '6.そう思う',
    '7.とてもそう思う',
];
/* 質問紙の設定 */
const likert_page = {
    type: jsPsychSurveyLikert,
    questions: [
      {prompt: '私は，目標にかかわる最も困難な課題を避ける。', required: true, name: 'item1', labels: scale},
      {prompt: '私は，もっと楽しい作業があれば，この目標を追いかけることを後回しにする。', required: true, name: 'item2', labels: scale},
      {prompt: '私は，この目標を追いかけることにストレスを感じたら，あきらめる。', required: true, name: 'item3', labels: scale},
      {prompt: '私は自分の考えや感情に巻き込まれてしまい，この目標を追いかけることができなくなる。', required: true, name: 'item4', labels: scale},
      {prompt: '私は，くじけた気持ちになったら，この目標を追いかけることから後ずさりする。', required: true, name: 'item5', labels: scale},
      {prompt: 'この目標を追いかける時は，私は後退することを受けいれて進む。', required: true, name: 'item6',labels: scale},
      {prompt: '私は，この目標を追いかける時，ネガティブな考えや感情が自分に生じたら否定するのでなく，そのまま素直に認める。', required: true, name: 'item7',labels: scale},
      {prompt: '私は，この目標に関するネガティブな考えや感情が生じても，自ら進んでそれらを心に漂わせたままにしておく。', required: true, name: 'item8',labels: scale},
      {prompt: '私は，この目標に関して自分の力で変えられない状況を受容する。', required: true, name: 'item9',labels: scale},
      {prompt: '私は，この目標を追いかける時不快な感情が生じたら，引き込まれずにそれらを観察できる。', required: true, name: 'item10',labels: scale},
      {prompt: 'この目標に関して障壁にぶつかった時，そこでの苛立ちが自分を奮い立たせる。', required: true, name: 'item11',labels: scale},
      {prompt: '私は，目標に関する問題について色々思い悩むことが，解決の役に立つと思う。', required: true, name: 'item12',labels: scale},
      {prompt: '私は，この目標を追いかけている時に，誰かが邪魔して怒りを感じたら，その怒りを利用して目標に集中する。', required: true, name: 'item13',labels: scale}, 
      {prompt: 'この目標を追いかけようとする自分の期待にこたえられない時，その罪悪感によってやる気になる。', required: true, name: 'item14',labels: scale},
      {prompt: '私は，この目標に向かう時の不快な感情は達成の役に立つと思う。', required: true, name: 'item15',labels: scale}
    ],
    randomize_question_order: false,
    preamble: '以下の文を読んで，この目標についてのあなたの考えや感情を最もよく表している回答を選んでください。',
    button_label: '次へ',
  };

/*タイムラインの設定*/
const timeline = [text_page,likert_page];
