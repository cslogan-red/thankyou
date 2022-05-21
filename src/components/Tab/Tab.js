import './Tab.scss';


function Tab({ tabContent }) {
  return (
    <div className="tab__body">
      <div
        className="tab__body--content"
      >
        {tabContent}
      </div>
    </div>
  );
}

export default Tab;