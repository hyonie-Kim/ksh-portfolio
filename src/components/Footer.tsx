import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="bg-slate-900 text-white py-2 text-sm text-center">
        &copy; {new Date().getFullYear()}. Kim Se Hyeon. All Rights Reserved.
      </p>
    </footer>
  );
}
