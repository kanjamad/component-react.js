import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            < ApprovalCard >
            <div>
                <h4>Warring!!</h4>
                Are you sure want to do this?
            </div>
            </ApprovalCard >

            < ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM " 
                    comment=" Nice blog!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            < ApprovalCard >
                <CommentDetail 
                    authjor="Alex" 
                    timeAgo="Today at 2PM " 
                    comment="Great!!" 
                    avatar={faker.image.avatar()}
                />
            </ ApprovalCard >

            < ApprovalCard >
                <CommentDetail 
                    authjor="Por" 
                    timeAgo="Today at 5PM " 
                    comment="I love it!!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard >
        </div>
    );
};

ReactDOM.render( <App />,document.querySelector('#root'))