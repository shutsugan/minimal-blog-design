import React, {Component} from 'react';
import Banner from './Banner';
import PostsList from './PostsList';

import '../css/Main.css';

class Main extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const posts = [
            {
                id: 1,
                author: 'Muhammad Tajjiou',
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                poster: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=abs-adult-athlete-1229356.jpg&fm=jpg',
                date: '01.09.2018'
            },
            {
                id: 2,
                author: 'Muhammad Tajjiou',
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                poster: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?cs=srgb&dl=barbell-black-and-white-black-and-white-791763.jpg&fm=jpg',
                date: '21.11.2018'
            },
            {
                id: 3,
                author: 'Saif-Dain Tajjiou',
                title: 'eum et est occaecati ullam et saepe reiciendis voluptatem adipisci',
                body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
                poster: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?cs=srgb&dl=barbell-black-and-white-equipment-949131.jpg&fm=jpg',
                date: '31.11.2018'
            },
            {
                id: 4,
                author: 'Oussama Tajjiou',
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
                poster: 'https://images.pexels.com/photos/896058/pexels-photo-896058.jpeg?cs=srgb&dl=barbell-biceps-black-and-white-896058.jpg&fm=jpg',
                date: '14.07.2018'
            }
        ];

        this.setState({posts});
    }

    render() {
        const banner_post = {
            id: 1,
            author: 'Muhammad Tajjiou',
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            poster: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=abs-adult-athlete-1229356.jpg&fm=jpg',
            date: '01.09.2018'
        };

        return(
            <div className="Main">
                <Banner post={banner_post} />
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}

export default Main;