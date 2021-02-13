import React from 'react';

const Hoc = (OriginalComp,Count) => {//step-1

    return class extends React.Component {//step-4
        constructor(props) {//step-5
            super(props)
            this.state = {
                // counter: 0
                counter:Count
            }

        }

        //step-6
        increment = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render() {
            return (<>
            {/* step-7 */}
                <OriginalComp
                    counter={this.state.counter}
                    increment={this.increment} />

            </>)
        }
    }
}



export default Hoc;