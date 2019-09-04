import React, { useState } from 'react'
import css from './SectionMainServiceCatalogDesktop.module.scss'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
// import bg1 from 'https://avatars.mds.yandex.net/get-verba/997355/2a0000016ae538ce2f2fda1b97d2756ad291/cattouchret'
import bg2 from 'static/images/im2.jpg'
import bg3 from 'static/images/im3.jpg'
import bg4 from 'static/images/im4.jpg'
import bg5 from 'static/images/im5.jpg'
import bg6 from 'static/images/bba649u-960.jpg'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const items = [
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: 'https://lh3.googleusercontent.com/8QXmwHEFA8mj7c09RQmCY2FmK38IMqmf3ofWEnmt4QEomgWE6NJDabE3u03n-tPEbF7MFFeP4BX0AKXTm-p4JZ5L7bdAVjQogFSxc-vrP6Et3KqrTtD4OgIt-gfjgLZtstgEb_dXOAUm5PHh3vWOorCyd65GUnpdlo64vrGXgGPyktYUKEuMIm0bBjKfCf5z7SrGY72C0vowUxOjyZlR9IreJgeHq1ViNsFkq5VeaeNFukTuZipECf6UPYVqgb_fTxr_3yURHvCSDGe9CLpFe2QhNTNMLz9bcesBsJGCbhnOV7Eua2p61Yn6ECCBIOFbo5ymAbeaeb4UtzcjD9goGRus_X3NoO0wjVNqesCCPGkP0w3DtRpKnPV9Lf0CAIDA_fSq_ERdjHQoVPglIOp_cOP792RlHnymejWcFMLXKZBZ75mIFu_dJjOVhUZRVhTzqxQ5aNd_SUzyPPPe8LRUWH9arbzZf9vHIdAwTJRNqjgqi3vh9Vn8BBvUSQDyCB1xU9JPZEmcOm9VBnWCd1mhj-qgZb_iOTPpcNTBB-LPXmgdCFXo7kBgBvNpFBJmeiMtuFnXs4KV8dRmf6Jhu2_4HD8BkH2Ld1Uf1LRHt-DF65TsUEiPdY7t5Z1qkMa8TcpMSye3dd7GPwNqA739A9WgFGwPi1LsCDmSiUav4j8n0KKQdGlFH8hydf2vYJY3MKeBoLiBtqW8tvG2KGhyZdU4pS7jmVx4NvbK0P-KqChye7VuIfyu=w1292-h969-no'
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg2
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg3
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg4
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg5
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg6
  }
]

const SectionMainServiceCatalogDesktop = () => {
  const [ activeSlide, setActiveSlide ] = useState(0)
  return (
    <div className={css.container} style={{ backgroundImage: `url(${items[activeSlide]?.img})` }}>
      <Layout className={css.wrapper}>
        <div className={css.content}>
          <div className={css.title} >Каталог наших услуг</div>
          <div className={css.text}>{text}</div>
        </div>
        <div className={css.items}>
          {
            items.map((item, key) => (
              <Link
                to={item.to}
                key={key}
                onMouseEnter={() => setActiveSlide(key)}
                className={css.item}
              >{item.title}
              </Link>
            ))
          }
        </div>
      </Layout>
    </div>
  )
}
SectionMainServiceCatalogDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionMainServiceCatalogDesktop)
