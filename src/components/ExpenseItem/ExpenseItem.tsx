import { LeadingActions, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";

const ExpenseItem = () => {

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            Action name
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            Delete
          </SwipeAction>
        </TrailingActions>
      );
    
    return (
    <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>
                <p>Item Content</p>
        </SwipeableListItem>
    );
}

export default ExpenseItem;