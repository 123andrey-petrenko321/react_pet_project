import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            term: '',
            filter: 'all',
            imgURL: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 0;
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onAddImg = this.onAddImg.bind(this)

    }

    addItem(body) {
        const newItem = {
            label: body,
            imortant: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }
    onToggleLiked(id) {
        this.setState(({ data }) => {

            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }
    onUpdateSearch(term) {
        this.setState({ term })
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onFilterSelect(filter) {
        this.setState({ filter })
    }
    onAddImg() {
        this.setState({ imgURL: `https://picsum.photos//300/200` })
    }



    render() {
        const { data, term, filter, imgURL } = this.state
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app" >
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostAddForm
                    onAddImg={this.onAddImg}
                    onAdd={this.addItem} />
                <PostList
                    imgUrl={imgURL}
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleLiked={this.onToggleLiked} />
            </div>
        );
    }

};

