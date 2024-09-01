interface SwipeContentProps {
    label: string;
    position: 'left' | 'right';
}

const SwipeContent = ({ label, position }: SwipeContentProps) => (
  <div className={`basic-swipeable-list__item-content-${position}`}>
    <span>{label}</span>
  </div>
);

export default SwipeContent;