import React from 'react';
import s from './css/Content.module.css';

const Content = () => {
    return (
    <section className={s.content}>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1680084/pub_5d3599116f5f6f00add74a04_5d3599dece44a000b9d37220/scale_1200" alt="" />
        <div className={s.user}>
            <img src="https://18000.com.ua/wp-content/uploads/2019/02/%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8.jpg" alt="" class="avatar" />
            <div className={s.user_info}>
                <h2>Kuzyk Yaroslav</h2>
                <p>memento mori</p>
                <p>Vntu</p>
            </div>
        </div>
        <div className={s.user_post}>
            <div className={s.user_input}>
                <input type="text" />
                <button>Post</button>
            </div>
            <div className={s.post}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquid laborum, cum ducimus deleniti commodi aliquam nihil aperiam reiciendis maxime assumenda, veniam officiis quos minima ea soluta itaque sequi, a nobis pariatur nesciunt officia amet laboriosam quod! Dolore, quibusdam atque, repellendus sed impedit quia modi et animi at excepturi veniam.</p>
            </div>
            <div className={s.post}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex?</p>
            </div>
        </div>
    </section>
    );
  }
  
  export default Content;