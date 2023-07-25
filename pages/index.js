import React from 'react'
import Head from 'next/head'

const Card27 = (props) => {
  return (
    <>
      <div className="card27-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="card27-card27">
          <div className="card27-top">
            <div className="card27-toptxt">
              <span className="card27-text TypographyH5">
                <span>This is the title 2</span>
              </span>
              <span className="card27-text2 TypographyBody2">
                <span>This is the body</span>
              </span>
            </div>
            <div className="card27-side">
              <div className="card27-frame-icon">
                <img
                  alt="IconXI220"
                  src="/external/iconxi220-5gdr.svg"
                  className="card27-icon-x"
                />
              </div>
            </div>
          </div>
          <div className="card27-content">
            <div className="card27-btns">
              <button className="card27-frame-button-contained">
                <div className="card27-base">
                  <span className="card27-text4 ComponentsButtonFont-Large">
                    <span>Download</span>
                  </span>
                </div>
              </button>
              <button className="card27-frame-button-text">
                <div className="card27-base1">
                  <span className="card27-text6 ComponentsButtonFont-Large">
                    <span>Skip</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card27-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .card27-card27 {
            gap: 26px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 30px;
            align-self: stretch;
            box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.07999999821186066);
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-light_background-background);
          }
          .card27-top {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .card27-toptxt {
            gap: 2px;
            width: 380px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .card27-text {
            color: var(--dl-color-light_text-primary);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .card27-text2 {
            color: var(--dl-color-light_text-secondary);
            height: auto;
            text-align: left;
            line-height: 150%;
          }
          .card27-side {
            gap: 44px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .card27-frame-icon {
            width: 20px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .card27-icon-x {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            position: absolute;
            flex-grow: 1;
            align-self: stretch;
          }
          .card27-content {
            gap: 18px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .card27-btns {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .card27-frame-button-contained {
            display: flex;
            overflow: hidden;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            border-radius: 4px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-light_primary-main);
          }
          .card27-base {
            gap: 8px;
            display: flex;
            padding: 8px 22px;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          .card27-text4 {
            color: var(--dl-color-light_primary-contrast);
            height: auto;
            text-align: left;
            line-height: 26px;
          }
          .card27-frame-button-text {
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: 4px;
            flex-direction: column;
            justify-content: center;
          }
          .card27-base1 {
            gap: 8px;
            display: flex;
            padding: 8px 22px;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          .card27-text6 {
            color: var(--dl-color-light_primary-main);
            height: auto;
            text-align: left;
            line-height: 26px;
          }
        `}
      </style>
    </>
  )
}

export default Card27
