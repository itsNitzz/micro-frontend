import React, { useRef, useEffect } from "react";

import { mount } from "dashboard/dashboard-module";

export default function dahsboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}
