import React, { useState } from 'react';
import { getRecentSearch, setCookieRecentSearch } from '../../../../HdCenter/HdSearchWrap/recentSearch/recentSearch';
import btnClose from '../../../../../../img/da_image/btn_top_search_del.png';

const RecentSearchBox : React.FC = () => {
  const abc = getRecentSearch();
  const [recentSearch, setRecentSearch] = useState<Array<any>>(abc);

  const handleOnClickClose = () => {
    const { style } = document.getElementById('search_cont_layer') as HTMLElement;
    style.display = 'none';
  };
  const handleOnClickDel = (indexInList:number) => {
    setRecentSearch((recentSearch) => recentSearch.filter((
      (value, index) => index !== indexInList)));
    recentSearch.splice(indexInList, 1);
    setCookieRecentSearch(recentSearch);
  };
  const handleOnClickDeleteAll = () => {
    recentSearch.splice(0);
    setRecentSearch((recentSearch) => recentSearch.filter(((value, index) => index !== -5)));
    setCookieRecentSearch(recentSearch);
  };
  return (
    <div className="search_cont" id="search_cont_layer" style={{ display: 'none' }}>
      <div className="recent_box">
        <dl className="js_recent_area">
          <dt>Recent search terms</dt>

          {Array.isArray(recentSearch) && recentSearch.length > 0 ? (
            <dd>
              <ul>
                {recentSearch.map((rcSearch, index) => {
                  const search = rcSearch.split('^|^');
                  return (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <a href="#">{search[0]}</a>
                      <span>
                        {search[1]}
                        <button
                          type="button"
                          className="btn_top_search_delete"
                          onClick={() => handleOnClickDel(index)}
                        >
                          <img src={btnClose} alt="btn_close" />
                        </button>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </dd>
          )
            : <dd> No Recent Search Term</dd>}

        </dl>
        <div className="search_button_close" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" className="btn_search_close" onClick={handleOnClickDeleteAll}>
            <strong>Delete All</strong>
          </button>
          <button type="button" className="btn_search_close" onClick={handleOnClickClose}>
            <strong>Close</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecentSearchBox;
