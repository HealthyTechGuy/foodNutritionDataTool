import React, { Component } from 'react';

class StandardNutritionCard extends Component {
  render() {

    const { full_nutrient_breakdown, foodName, calories, sizeInGrams, totalFat, saturatedFat, cholesterol, sodium, totalCarbs, fiber, sugars } = this.props.totalsObject
    const nullObject = { name: "null", value: 0, unit: "mg" }

    let protein = (full_nutrient_breakdown.find(o => o.name === 'Protein') != null) ? full_nutrient_breakdown.find(o => o.name === 'Protein') : nullObject;
    let vitD = (full_nutrient_breakdown.find(o => o.name === 'Vitamin D') != null) ? full_nutrient_breakdown.find(o => o.name === 'Vitamin D') : nullObject;
    let calcium = (full_nutrient_breakdown.find(o => o.name === 'Calcium') != null) ? full_nutrient_breakdown.find(o => o.name === 'Calcium') : nullObject;
    let iron = (full_nutrient_breakdown.find(o => o.name === 'Iron') != null) ? full_nutrient_breakdown.find(o => o.name === 'Iron') : nullObject;
    let magnesium = (full_nutrient_breakdown.find(o => o.name === 'Magnesium') != null) ? full_nutrient_breakdown.find(o => o.name === 'Magnesium') : nullObject;
    let zinc = (full_nutrient_breakdown.find(o => o.name === 'Zinc') != null) ? full_nutrient_breakdown.find(o => o.name === 'Zinc') : nullObject;
    let vitA = (full_nutrient_breakdown.find(o => o.name === 'Vitamin A') != null) ? full_nutrient_breakdown.find(o => o.name === 'Vitamin A') : nullObject;
    let vitC = (full_nutrient_breakdown.find(o => o.name === 'Vitamin C') != null) ? full_nutrient_breakdown.find(o => o.name === 'Vitamin C') : nullObject;
    let thiamin = (full_nutrient_breakdown.find(o => o.name === 'Thiamin') != null) ? full_nutrient_breakdown.find(o => o.name === 'Thiamin') : nullObject;
    let riboflavin = (full_nutrient_breakdown.find(o => o.name === 'Riboflavin') != null) ? full_nutrient_breakdown.find(o => o.name === 'Riboflavin') : nullObject;
    let niacin = (full_nutrient_breakdown.find(o => o.name === 'Niacin') != null) ? full_nutrient_breakdown.find(o => o.name === 'Niacin') : nullObject;
    let vitb6 = (full_nutrient_breakdown.find(o => o.name === 'Vitamin B-6') != null) ? full_nutrient_breakdown.find(o => o.name === 'Vitamin B-6') : nullObject;
    let folate = (full_nutrient_breakdown.find(o => o.name === 'Folate') != null) ? full_nutrient_breakdown.find(o => o.name === 'Folate') : nullObject;
    let betaine = (full_nutrient_breakdown.find(o => o.name === 'Betaine') != null) ? full_nutrient_breakdown.find(o => o.name === 'Betaine') : nullObject;
    let arginine = (full_nutrient_breakdown.find(o => o.name === 'Arginine') != null) ? full_nutrient_breakdown.find(o => o.name === 'Arginine') : nullObject;
    let potassium = (full_nutrient_breakdown.find(o => o.name === 'Potassium') != null) ? full_nutrient_breakdown.find(o => o.name === 'Potassium') : nullObject;
    let caffeine = (full_nutrient_breakdown.find(o => o.name === 'Caffeine') != null) ? full_nutrient_breakdown.find(o => o.name === 'Caffeine') : nullObject;

    return (
      <div itemScope itemType="http://schema.org/NutritionInformation" className="nf" role="region" aria-label="nutrition label" >
        <div className="nf-title" tabIndex={0}>Nutrition Facts</div>
        <div className="nf-line">
          <div className="nf-serving">
            <div tabIndex={0} className="nf-line">{/* opening for serving size div */}
                            Serving Size: <span itemProp="servingSize">1</span>
                            ({sizeInGrams}<span aria-hidden="true">g</span><span className="sr-only"> grams</span>)
                          </div>
            <div className="foodName" style={{ fontsize: '20px' }}>
              {foodName}
            </div>
          </div>
        </div>
        <div className="nf-bar2" />
        <div className="nf-amount-per-serving" tabIndex={0}>Amount Per Serving </div>
        <div className="nf-calories" tabIndex={0}>
          <span className>Calories</span>
          <span className="nf-pr" itemProp="calories">{calories}</span>
        </div>
        <div className="nf-bar1" />
        <div className="nf-line nf-text-right">
          <span className="nf-highlight nf-percent-dv">% Daily Value*</span>
        </div>
        <div className="nf-line" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className="nf-highlight">Total Fat </span>
          <span className itemProp="fatContent">{totalFat} <span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line nf-indent" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className>Saturated Fat </span>
          <span className itemProp="saturatedFatContent">{saturatedFat} <span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line nf-indent" tabIndex={0}>
          <span className><em>Trans</em> Fat </span>
          <span className itemProp="transFatContent">0<span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className="nf-highlight">Cholesterol </span>
          <span className itemProp="cholesterolContent">{cholesterol} <span aria-hidden="true">mg</span><span className="sr-only"> milligrams</span></span>
        </div>
        <div className="nf-line" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className="nf-highlight">Sodium </span>
          <span className itemProp="sodiumContent">{sodium} <span aria-hidden="true">mg</span><span className="sr-only"> milligrams</span></span>
        </div>
        <div className="nf-line" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className="nf-highlight">Total Carbohydrates </span>
          <span className itemProp="carbohydrateContent">{totalCarbs} <span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line nf-indent" tabIndex={0}>
          <span className="nf-highlight nf-pr" aria-hidden="true">0%</span>
          <span className>Dietary Fiber </span>
          <span className itemProp="fiberContent">{fiber} <span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line nf-indent" tabIndex={0}>
          <span className>Sugars </span>
          <span className itemProp="sugarContent">{sugars} <span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-line" tabIndex={0}>
          <span className="nf-highlight">Protein </span>
          <span className itemProp="proteinContent">{protein.value}<span aria-hidden="true"> g</span><span className="sr-only"> grams</span></span>
        </div>
        <div className="nf-bar2" />
        <div className="nf-vitamins">
          <div className="nf-vitamins">
            <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Vitamin D {vitD.value}<span aria-hidden="true"> {vitD.unit}</span><span className="sr-only"> micrograms</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div>
            <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Calcium {calcium.value}<span aria-hidden="true"> {calcium.unit} </span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div>
            <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Iron {iron.value}<span aria-hidden="true"> {iron.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div>
            <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Magnesium {magnesium.value}<span aria-hidden="true"> {magnesium.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Zinc {zinc.value}<span aria-hidden="true"> {zinc.unit} </span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Vitamin A {vitA.value}<span aria-hidden="true"> {vitA.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Vitamin C {vitC.value}<span aria-hidden="true"> {vitC.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Thiamin {thiamin.value}<span aria-hidden="true"> {thiamin.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Riboflavin {riboflavin.value}<span aria-hidden="true"> {riboflavin.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Niacin {niacin.value}<span aria-hidden="true"> {niacin.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Vitamin B-6 {vitb6.value}<span aria-hidden="true"> {vitb6.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Folate {folate.value}<span aria-hidden="true"> {folate.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Betaine {betaine.value}<span aria-hidden="true"> {betaine.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div> <div className="nf-vitamin-column nf-highlight" tabIndex={0}>
              Arginine {arginine.value}<span aria-hidden="true"> {arginine.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div>
            <div className="nf-vitamin-column nf-highlight nf-vitamin-column-last" tabIndex={0}>
              Potassium {potassium.value}<span aria-hidden="true"> {potassium.unit}</span><span className="sr-only"> milligrams</span> <span className="nf-pr" aria-hidden="true">0%</span>
            </div>
          </div>
        </div>
        <div className="nf-bar2" />
        <div className tabIndex={0}>
          <span className="nf-highlight">Caffeine </span>
          <span className itemProp="caffeineContent"> {caffeine.value} {caffeine.unit} </span>
        </div>
        <div className="nf-bar1" />
        <div className="nf-vitamins">
          <div className="nf-footnote">
            <span tabIndex={0}>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice.</span>
            <br />
            <div className="nf-ingredientListDiv" tabIndex={0}>
              <strong className="active" id="nf-ingredientList">INGREDIENTS:</strong> None
            </div>
          </div>
          <div className="naTooltip">Data not available</div>
        </div>
      </div>
    );
  }
}

export default StandardNutritionCard;