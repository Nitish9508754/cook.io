/**
 * @license MIT
 * @copyright 2023 nitishpandit
 * @author nitishpandit <nitishmernexpert@gmail.com>
 */

"use strict";

import { fetchData } from "./api.js";

/**
 * 
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type string
 * @param {Function} callback Callback function
 */

window.addEventOnElements = ($elements, eventType, callback)=>{
    for(const $element of $elements){
        $element.addEventListener(eventType, callback);
    }
}

 export const /** {Array} */ cardQueries = [
["field", "rui"],
["field", "label"],
["field", "image"],
["field", "totalTime"],
];

/**
 * Skeleton card
 */
 export const /** {String} */ $skeletonCard = `
<div class="card skeleton-card">

        <div class="skeleton card-banner"></div>

            <div class="card-body">
              <div class="skeleton card-title">
            </div>

            <div class="skeleton card-text"></div>
        </div>

</div>
`;

const /** {String} */ ROOT = "https://api.edamam.com/api/recipes/v2";

window.savedRecipe = function(element, recipeId){
    const /** {String} */ isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);
    ACCESS_POINT = `${ROOT}/${recipeId}`;

    if(!isSaved){
        fetchData(cardQueries, function(data){
        window.localStorage.setItem(`cookio-recipe${recipeId}`, JSON.stringify(data));
        element.classList.toggle("saved");
        element.classList.toggle("removed");
        });
        ACCESS_POINT = ROOT;
    }else{
        window.localStorage.removeItem(`cookio-recipe${recipeId}`);
        element.classList.toggle("saved");
        element.classList.toggle("removed");

    }
}
