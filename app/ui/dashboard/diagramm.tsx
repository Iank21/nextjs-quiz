'use client';

export default function Diagramm() {
  // { quizResult }: any

    const mock = {
      phase_1: 38,
      param_1_1: 12,
      param_1_2: 11,
      param_1_3: 7,
      param_1_4: 8,

      phase_2: 76,
      param_2_1: 17,
      param_2_2: 20,
      param_2_3: 23,
      param_2_4: 16,

      phase_3: 50,
      param_3_1: 15,
      param_3_2: 15,
      param_3_3: 13,
      param_3_4: 7,
    };
    
    // Доделать отрисовку диаграмм

    const width_phase_1 = 0.9 * mock.phase_1;

    let color_phase_1 = '';
    
    if (mock.phase_1 <= 36 && mock.phase_1 >= 0) {
      color_phase_1 = '#22C55E';
    } else if (mock.phase_1 <= 60 && mock.phase_1 >= 37) {
      color_phase_1 = '#F97316';
    } else {
      color_phase_1 = '#B91C1C';
    }

  return (
    <>
      <div className={`max-w-5xl m-auto p-4 rounded-lg	border-2 border-blue-500 border-solid`}>
        <p className={`text-xl text-center`}>
          I. Фаза напряжения
        </p>
        <div className={`flex gap-1.5`}>
          <div className={`w-full`}>
            <div className="d-line">
            </div>
            <div className={`flex flex-row justify-between items-center`}>
              <div className={`text-green-500	flex flex-row justify-between w-2/5`}>
                <div>{`[0`}</div>
                <div>{`36]`}</div>
              </div>
              <div className={`text-orange-500 flex flex-row justify-between w-1/4`}>
                <div>{`[37`}</div>
                <div>{`60]`}</div>
              </div>
              <div className={`text-red-700 flex flex-row justify-between`} style={{width: `35%`}}>
                <div>{`[61`}</div>
                <div>{`90]`}</div>
              </div>
            </div>
          </div>
          <div>
            <b>{mock.phase_1}</b>
          </div>
        </div>
        <div className={`text-center mt-4 mb-4`}>
          <p className={`text-green-500`}>{mock.phase_1 <= 36 && mock.phase_1 >= 0  ? `[ не сформированная фаза ]` : ``}</p>
          <p className={`text-orange-500`}>{mock.phase_1 <= 60 && mock.phase_1 >= 37  ? `[ фаза в стадии формирования ]` : ``}</p>
          <p className={`text-red-700`}>{mock.phase_1 <= 90 && mock.phase_1 >= 61 ? `[ сформировавшаяся фаза]` : ``}</p>
        </div>
        <div>
          <div className={`flex gap-2.5 justify-center items-center`}>
            <div>
              Переживание обстоятельств
            </div>
            <div className={`h-6 w-3/5 border border-solid border-slate-400`}></div>
            <div><b>{mock.param_1_1}</b></div>
          </div>
          <div className={`flex gap-2.5 justify-center items-center`}>
            <div>
              Неудовлетворенность собой
            </div>
            <div className={`h-6 w-3/5 border border-solid border-slate-400`}></div>
            <div><b>{mock.param_1_2}</b></div>
          </div>
          <div className={`flex gap-2.5 justify-center items-center`}>
            <div>
              «Загнанность в клетку»
            </div>
            <div className={`h-6 w-3/5 border border-solid border-slate-400`}></div>
            <div><b>{mock.param_1_3}</b></div>
          </div>
          <div className={`flex gap-2.5 justify-center items-center`}>
            <div>
              Тревога и депрессия
            </div>
            <div className={`h-6 w-3/5 border border-solid border-slate-400`}></div>
            <div><b>{mock.param_1_4}</b></div>
          </div>
        </div>
        
        
      </div>
      <style jsx>
        {`
          .d-line::after {
            content: '';
            height: 24px;
            display: block;
            width:  ${width_phase_1}%;
            background: ${color_phase_1};
          }
        `}
    </style>
    </>
  );
}