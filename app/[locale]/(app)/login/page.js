'use client'
import { useCartStore } from "@/store/cart";
import useFromStore from "@/hooks/useFromStore"

function Login() {
  const count = useFromStore(useCartStore, (state) => state.count);
  const { inc } = useCartStore();
  return (<div>
    <h1>login</h1>
    <h1>{count}</h1>

    <button className="btn" onClick={inc}>add to cart</button>
  </div>);
}

export default Login;