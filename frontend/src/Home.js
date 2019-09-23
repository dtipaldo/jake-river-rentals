import React, {Fragment} from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class Home extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(7),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 300, background: '#CCC' }}>{i}</div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <Fragment>
            <h1>Paddle the Jake River</h1>
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 300, background: '#900' }}>Placeholder</div>}

                // Carousel configurations
                numberOfCards={3}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
            >
                {children}
            </ItemsCarousel>
            </Fragment>
        );
    }
}