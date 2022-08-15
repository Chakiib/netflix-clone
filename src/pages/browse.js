import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { groupByGenre } from '../utils/selection-group';

const Browse = () => {
    const { films } = useContent('films');
    const { series } = useContent('series');

    const slides = { series: groupByGenre(series), films: groupByGenre(films) };

    return <BrowseContainer slides={slides} />;
};

export default Browse;
