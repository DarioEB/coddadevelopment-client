import { scroller } from 'react-scroll';

export const handleScroll = (route) => {

    const scrollType = {
        duration: 333,
        delay: 33,
        smooth: true,
        offset: -10
    }

    scroller.scrollTo(route, scrollType);
}