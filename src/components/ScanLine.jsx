'use client';

import { useEffect, useState } from 'react';

export default function ScanLine() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <div className="scan-line" />;
}
