import clsx from "clsx";
import styles from "./qna.module.scss"
import qnaList from "./qna.json";
import shortid from 'shortid';
import TopTitle from "components/molecules/topTitle";

const QnA = () => {

  return (
    <>
    <section className="container py-0">
      <TopTitle title="자주 묻는 질문" borderBlue/>
    </section>
    <section className="container pt-0 pb-15 pb-md-25">
      {
        qnaList.map(item => {
          return (
            <>
              <div className="d-flex align-items-baseline blue-100 pt-12 pb-4 pb-md-9">
                <p className="heading2 mr-2">Q. </p>
                <h3 key={shortid.generate()} className="white-pre-wrap">
                  {item.question}
                </h3>
              </div>
              <div className={clsx(styles['answer-wrapper'], 'p-7 p-md-10')}>
                <p className="normal3 gray-500 white-pre-wrap">
                  {item.answer}
                </p>
              </div>
            </>
          )
        })
      }

    </section>
    </>
  )
}

export default QnA;