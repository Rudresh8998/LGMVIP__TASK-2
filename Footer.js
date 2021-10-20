import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>ZIPPY</h1>
            <ul>
              <li>
                Contact: <a href="mailto:xyz@gmail.com">contact@zippy.com</a>
              </li>
              <li>
                Tel: <a href="tel: +987654 796245">+987654 796245</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
