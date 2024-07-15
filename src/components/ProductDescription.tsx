'use client'

import DOMPurify from 'isomorphic-dompurify';
import { useEffect, useState } from "react";

const ProductDescription = ({ description }: { description: string }) => {
  const [sanitizedDescription, setSanitizedDescription] = useState('');

  useEffect(() => {
    setSanitizedDescription(DOMPurify.sanitize(description || ''));
  }, [description]);

  return (
    <p
      className="text-gray-500"
      dangerouslySetInnerHTML={{
        __html: sanitizedDescription,
      }}
    >
    </p>
  );
};
export default ProductDescription