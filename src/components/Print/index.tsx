import React, { useCallback, useEffect } from 'react';

interface IOwnProps {
  printRef: any;
}

interface IProps extends IOwnProps {}

export const Print: React.FC<IProps> = ({ printRef }) => {
  const printNode = document.querySelector('#print');
  const cleanupNode = () => {
    while (printNode.firstChild) {
      printNode.removeChild(printNode.firstChild);
    }
  };

  const handleClick = useCallback(
    () => {
      cleanupNode();
      printNode.appendChild(printRef.current.cloneNode(true));
      window.print();
      cleanupNode();
    },
    [printRef]
  );

  useEffect(() => cleanupNode);
  return <button onClick={handleClick}>Print</button>
};
