"use client";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cart";
import useFromStore from "@/hooks/useFromStore";

export default function Header() {
  const t = useTranslations("Menu");
  const count = useFromStore(useCartStore, (state) => state.count);
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">{t("home")}</a>
          </li>
          <li>
            <a href="/about">{t("about")}</a>
          </li>
          <li>
            <details>
              <summary>多语言</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  {" "}
                  <Link href="/" locale="en">
                    英文
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/" locale="jp">
                    日语
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
