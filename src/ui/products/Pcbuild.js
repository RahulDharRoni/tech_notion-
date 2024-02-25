import React from "react";
import style from "./pcbuilder.module.css";
import Image from "next/image";
import rlogo from "@/assets/images/logo.png";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";
// import cpu from "@/assets/images/cpu.svg";

const Pcbuild = () => {
  return (
    <div>
      <div className={style["pcb-container"]}>
        <div className={style["pcb-head"]}>
          <div className={style["startech-logo"]}>
            <Image className="w-[150px]" src={rlogo} alt="Logo" />
          </div>
          <div className={style.actions}>
            <div className={`${style["all-actions"]}`}>
              <Link
                className={style["action"]}
                href="https://www.startech.com.bd/tool/pc_builder/add_to_cart"
              >
                <div className="flex justify-center text-red-700">
                  <FaCartArrowDown className={style["materialicons"]} />
                </div>
                <span className={style["actiontext"]}>Add to Cart</span>
              </Link>
              <Link
                className={style["action"]}
                href="https://www.startech.com.bd/tool/pc_builder/add_to_cart"
              >
                <div className="flex justify-center text-red-700">
                  <FaCartArrowDown className={style["materialicons"]} />
                </div>
                <span className={style["actiontext"]}>Add to Cart</span>
              </Link>
              <Link
                className={style["action"]}
                href="https://www.startech.com.bd/tool/pc_builder/add_to_cart"
              >
                <div className="flex justify-center text-red-700">
                  <FaCartArrowDown className={style["materialicons"]} />
                </div>
                <span className={style["actiontext"]}>Add to Cart</span>
              </Link>
              <Link
                className={style["action"]}
                href="https://www.startech.com.bd/tool/pc_builder/add_to_cart"
              >
                <div className="flex justify-center text-red-700">
                  <FaCartArrowDown className={style["materialicons"]} />
                </div>
                <span className={style["actiontext"]}>Add to Cart</span>
              </Link>
              <a
                class="pcb-button btn st-outline"
                href="https://www.startech.com.bd/tool/pc_builder/quote"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        <div className={style["pcb-inner-content"]}>
          <div className={style["pcb-top-content"]}>
            <div className={style.left}>
              <h1 className={style["m-hide"]}>
                PC Builder - Build Your Own Computer - Star Tech
              </h1>
              <div className={style["checkbox-inline"]}>
                <input type="checkbox" name="hide" id="input-hide" />
                <label className="px-2" htmlFor="input-hide">
                  Hide Unconfigured Components
                </label>
              </div>
            </div>
            <div className={style.right}>
              <div
                className={`${style["totalamount"]} ${style["estimated-watt"]}`}
              >
                <span className={style.amount}>0W</span>
                <br />
                <span className={style.items}>Estimated Wattage</span>
                <span className={style.betaa}>BETA</span>
              </div>
              <div className={`${style["totalamount"]} ${style["tprice"]}`}>
                <span className={style.amount}>0৳</span>
                <br />
                <span className={style.items}>0 Items</span>
              </div>
            </div>
          </div>
          <div className={style["pcb-content"]}>
            <div className={style["content-label"]}>Core Components</div>
            <div className={`${style["c-item"]} ${style.blank}`}>
              <div className={style.img}>
                <span
                  className={`${style["img-ico"]} ${style["img-ico-Cup"]}`}
                ></span>
              </div>
              <div className={style.details}>
                <div className={style["component-name"]}>
                  <span>CPU</span>
                  <span className={style.mark}>Required</span>
                </div>
                <div className={style["product-name"]}></div>
              </div>
              <div className={style["item-price"]}></div>
              <div className={style.actions}>
                <Link href={"#"} className={`btn ${style["st-outline"]}`}>
                  Choose
                </Link>
              </div>
            </div>
            <div className={`${style["c-item"]} ${style.blank}`}>
              <div className={style.img}>
                <span
                  className={`${style["img-ico"]} ${style["img-ico-Motherboard"]}`}
                ></span>
              </div>
              <div className={style.details}>
                <div className={style["component-name"]}>
                  <span>Motherboard</span>
                  <span className={style.mark}>Required</span>
                </div>
                <div className={style["product-name"]}></div>
              </div>
              <div className={style["item-price"]}></div>
              <div className={style.actions}>
                <Link href={"#"} className={`btn ${style["st-outline"]}`}>
                  Choose
                </Link>
              </div>
            </div>
            <div className={`${style["c-item"]} ${style.blank}`}>
              <div className={style.img}>
                <span
                  className={`${style["img-ico"]} ${style["img-ico-RAM"]}`}
                ></span>
              </div>
              <div className={style.details}>
                <div className={style["component-name"]}>
                  <span>RAM</span>
                  <span className={style.mark}>Required</span>
                </div>
                <div className={style["product-name"]}></div>
              </div>
              <div className={style["item-price"]}></div>
              <div className={style.actions}>
                <Link href={"#"} className={`btn ${style["st-outline"]}`}>
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/jbl-week-home-banner-982x500.webp"
          alt="JBL Week Home Banner"
          width={970}
          height={500}
        />
      </div>
    </div>
  );
};

export default Pcbuild;
