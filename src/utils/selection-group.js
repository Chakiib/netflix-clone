export const groupByGenre = (items) => {
    const groupedItems = [];
    const itemGenres = [...new Set(items.map((item) => `${item.genre.charAt(0).toUpperCase()}${item.genre.slice(1)}`))];

    itemGenres.forEach((genre) => {
        groupedItems.push({
            title: genre,
            data: items.filter((item) => item.genre.toLowerCase() === genre.toLowerCase()),
        });
    });

    return groupedItems;
};
