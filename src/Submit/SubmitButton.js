import React, { Component } from 'react';
import { Button, CircularProgress, Box } from '@material-ui/core';
import axios from 'axios';
import config from '../config.json';

const pieDataArr = [
    // E.g: { x: "Vitamin D", y: 35 },
  ]

  let totalsObject = { 
    foodName: '',
    sizeInGrams: 0,
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbs: 0,
    fiber: 0,
    sugars: 0,
    protein: 0,
    vitaminD: 0,
    calcium: 0,
    iron: 0,
    potassium: 0,
    caffine: 0,
    full_nutrient_breakdown : []
} 


function findTotals(APIData){

    APIData.forEach(foodItem => {
        totalsObject.foodName += foodItem.food_name;
        totalsObject.sizeInGrams += foodItem.serving_weight_in_grams;
        totalsObject.calories += foodItem.calories;
        totalsObject.totalFat += foodItem.total_fat;
        totalsObject.saturatedFat += foodItem.saturated_fat;
        totalsObject.cholesterol += foodItem.cholesterol;
        totalsObject.sodium += foodItem.sodium;
        totalsObject.totalCarbs += foodItem.total_carbohydrate;
        totalsObject.fiber += foodItem.dietary_fiber;
        totalsObject.sugars += foodItem.sugars;
        totalsObject.protein += foodItem.protein;
        totalsObject.potassium += foodItem.potassium;

        foodItem.full_nutrient_breakdown.forEach(nutrient => {
            totalsObject.full_nutrient_breakdown.push(nutrient);
            pieDataArr.push({x: `${nutrient.name} ${nutrient.value} ${nutrient.unit}`, y: nutrient.value})
        })
    });
}

class SubmitButton extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    state = { loading: false }

    async handleSubmit() {
        this.setState({ loading: true })
        const body = { inputText: this.props.inputText }

        const response = await axios({
            method: 'post',
            url: 'https://nutri-s1.p.rapidapi.com/nutrients',
            headers: {
                "x-rapidapi-host": "nutri-s1.p.rapidapi.com",
                "x-rapidapi-key": config.NutriSRapidAPIKey,
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true
            },
            data: { "query": body.inputText }
        })
        
        console.log(" response from Nutri-S API: ", response.data.foods);
        findTotals(response.data.foods);
        this.setState({ loading: false })
        this.props.firstImage(response.data.foods[0].photo.high_res !== null ? response.data.foods[0].photo.high_res : response.data.foods[0].photo.thumbnail);
        this.props.responseText(JSON.stringify(response.data.foods, null, 4));
        this.props.totalsObject(totalsObject);
        this.props.allPieData(pieDataArr);
    }

    render() {
        const { loading } = this.state;
        return (
            <Box flexWrap="wrap" alignItems="center">
                {
                    loading ?
                        <CircularProgress color="primary" />
                        : <Button onClick={this.handleSubmit} disabled={loading} variant="contained" color="primary" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Evaluate</Button>
                }
            </Box>

        );
    }
}

export default SubmitButton;