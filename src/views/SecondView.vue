<template>
    <div>
        <v-container><apexchart min-width="900" type="radar" :options="opt" :series="ser"></apexchart></v-container>
    </div>
</template>

<script>

export default {
    data(){ 
        return {
            options: {
                chart: {
                id: 'vuechart-example'
                },
                xaxis: {
                categories: []
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 622220, 70, 91]
            }]
        }
    },
    computed:{
        opt(){
            let opt = {
                chart:{
                    id: 'ex-id'
                },
                xaxis:{
                    categories: []
                }
            }
            for(let val of this.$store.state.student.students){
                opt.xaxis.categories.push(val[1].fullName.split(" ").splice(0,1));
                //console.log(val)
            }
            return opt;
        },
        ser(){
            //Формуруем данные в виде, необходимом для компоненты
            let ser = [{
                name: 'Оценка',
                data: []
            }]
            //Сортируем грейды по кодам студентов чтобы совпадали и выводим
            for(let val of this.$store.state.student.students){
                ser[0].data.push(this.$store.state.grade.grades.find((gr)=>gr.studentCode == val[1].code).grade);  
            }

            return ser
        }
    },
    methods:{
        
    },
    async mounted() {
        await this.$store.dispatch("grade/getCourses");
        await this.$store.dispatch("student/getStudents");
        await this.$store.dispatch("grade/getGrades");
    }
    // beforeMount(){
    //     this.students();
    // },
}
</script>