import React, { useState } from 'react';
import './index.css';
import { getRecentSearch, setCookieRecentSearch } from '../../../HdCenter/HdSearchWrap/recentSearch/recentSearch';
import iconSearch from '../../../../../img/da_image/icon_search.png';
import RecentSearchBox from './recentSearch/recentSearchBox';

const LayerSearch : React.FC = () => {
  const [textInput, setTextInput] = useState('');

  const recentSearch = getRecentSearch();

  const handleChange = ({ target }:any) => {
    setTextInput(target.value);
  };

  const handleOnMouseLeave = () => {
    const textSearch = document.getElementById('search_form_layer');
        textSearch?.blur();
        // style search_cont //
        const { style } = document.getElementById('search_cont_layer') as HTMLElement;
        style.display = 'none';
  };
  const handleOnFocus = () => {
    const { style } = document.getElementById('search_cont_layer') as HTMLElement;
    style.display = '';
  };

  const handleSubmit = () => {
    if (textInput === '') {
      alert('Please enter your search term');
    } else {
      const date = new Date().toISOString().slice(0, 10).replace(/-/gi, '.');
      const search = `${textInput}^|^${date}`;
      recentSearch.push(search);
      setCookieRecentSearch(recentSearch);
    }
  };
  return (
    <div className="layer_search">
      <div className="top_search" onMouseLeave={handleOnMouseLeave}>
        <form name="frmSearchTop" action="#" id="frmSearchTop" noValidate onSubmit={handleSubmit}>
          <fieldset>
            <legend style={{ display: 'none' }}>Search From</legend>
            <div className="top_search_cont">
              <div className="top_text_cont">
                <input
                  type="text"
                  id="search_form_layer"
                  name="keyword"
                  className="top_search_text"
                  autoComplete="off"
                  value={textInput}
                  onChange={handleChange}
                  onFocus={handleOnFocus}
                />
                <input
                  type="image"
                  src={iconSearch}
                  alt="icon_search"
                  id="btn_search_top"
                />
              </div>
            </div>
            <RecentSearchBox />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LayerSearch;
