import React from 'react';
import styles from './service_main.module.css'

const ServiceMain = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>

        <div className={styles.base}>
          <div className={styles.about_top}>
            <div className={styles.about_inner}>
              <strong className={styles.about_title}>블록 마을은 ?</strong>
              <p className={styles.about_dsc}>
                블록마을은 누구나 소프트웨어 교육을 받을 수 있는 플랫폼입니다.<br/>
                학생들이 소프트웨어를 쉽고 재미있게 학습하고,<br/>
                선생님들은 효과적으로 학생들을 가르칠 수 있습니다.<br/>
              </p>
              <a className={styles.about_link}>영상보기</a>
            </div>
            <div className={styles.end_about}></div>
          </div>
        </div>




        <div className={styles.pannel}>


          <div className={styles.title}>
            <span className={styles.head}></span>
            <span className={styles.head_binding}>
              <img className={styles.logo_img} src="/images/logo2.png" width="100" height="50"/>
               에서는
            </span>
            <span className={styles.head_end}></span>
          </div>


          <div className={styles.section}>
            <img src="https://playentry.org/img/assets/about/entry_1.png" width="317" height="219" />
            <div className={styles.content_1}>
              <span className={styles.content_1_title}>미션 깨기</span>
              <span className={styles.content_sub_title}>재밌게 배우는 학습공간</span>
              <div className={styles.content_detail}>
                [미션깨기] 에서는 엔트리를 학습할 수 있는 콘텐츠가 준비되어 있습니다.<br/>
                게임을 하듯이 주어진 미션을 프로그래밍으로 해결하고 영상을 시청하며<br/>
                소프트웨어 제작 원리를 학습할 수 있습니다.<br/>
              </div>
            </div>
          </div>


          <div className={styles.section}>
            <div className={styles.content_box}>
              <span className={styles.content_1_title}>미션 만들기</span>
              <span className={styles.content_sub_title}>창작의 즐거움</span>
              <div className={styles.content_detail}>
                [미션 만들기] 에서는 미국 MIT에서 개발한 Scratch와 같은 블록형 프로그래밍 언어를<br/>
                사용하여 프로그래밍을 처음 접하는 사람들도 쉽게 자신만의 창작물을 만들 수 있습니다.<br/>
                또한 블록 코딩과 텍스트 코딩의 중간다리 역할을 하는 '엔트리파이선' 모드에서는<br/>
                텍스트 언어의 구조와 문법을 자연스럽게 익힐 수 있습니다.<br/>
              </div>
            </div>
            <img src="https://playentry.org/img/assets/about/entry_2.png" width="317" height="219" />
          </div>


          <div className={styles.section}>
            <img src="https://playentry.org/img/assets/about/entry_1.png" width="317" height="219" />
            <div className={styles.content_1}>
              <span className={styles.content_1_title}>공유하기</span>
              <span className={styles.content_sub_title}>재밌게 배우는 학습공간</span>
              <div className={styles.content_detail}>
                [공유하기] 에서는 엔트리를 학습할 수 있는 콘텐츠가 준비되어 있습니다.<br/>
                게임을 하듯이 주어진 미션을 프로그래밍으로 해결하고 영상을 시청하며<br/>
                소프트웨어 제작 원리를 학습할 수 있습니다.<br/>
              </div>
            </div>
          </div>


          <div className={styles.section}>
            <div className={styles.content_box}>
              <span className={styles.content_1_title}>챌린지 참가하기</span>
              <span className={styles.content_sub_title}>창작의 즐거움</span>
              <div className={styles.content_detail}>
                [챌린지] 에서는 미국 MIT에서 개발한 Scratch와 같은 블록형 프로그래밍 언어를<br/>
                사용하여 프로그래밍을 처음 접하는 사람들도 쉽게 자신만의 창작물을 만들 수 있습니다.<br/>
                또한 블록 코딩과 텍스트 코딩의 중간다리 역할을 하는 '엔트리파이선' 모드에서는<br/>
                텍스트 언어의 구조와 문법을 자연스럽게 익힐 수 있습니다.<br/>
              </div>
            </div>
            <img src="https://playentry.org/img/assets/about/entry_2.png" width="317" height="219" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default ServiceMain;