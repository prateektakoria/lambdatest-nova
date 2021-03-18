<template>
    <div>
        <heading class="mb-6">Currency Converter</heading>
        <div class="wrapper">
            <div class="card-div ml-2 mr-2 mb-3" :key="curr.type" v-for="curr in currency">
                <card
                    class="flex flex-col items-center justify-center"
                >
                    <p class="text-black mt-6 mb-6 text-2xl text-90 font-light currency">
                        INR : 1 <br>
                        {{ curr.type }} : {{ curr.rate }}
                    </p>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {currency : []};
    },
    mounted() {
        fetch('https://api.exchangeratesapi.io/latest?base=INR', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.currency = [{rate: response.rates.USD, type:'USD'}, {rate: response.rates.GBP, type: 'GBP'}, {rate: response.rates.EUR, type: 'EUR'}];
        })
        .catch(err => {
            console.log(err);
            return {'currency': 'API Error!'};
        });
    },
    components: {
    }
}
</script>

<style>
.wrapper{
    text-align: center;
}
.card-div{
    display: inline-block;
    min-width: 30%;;
}
.currency{
    font-family: monospace;
    font-weight: bold;
}
</style>
