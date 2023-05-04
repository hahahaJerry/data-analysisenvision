
$(function () {

    /*ceshis();*/
    ceshis1();
    ceshis2();
    ceshis3();
    ceshis4();
    ceshis5();




    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart2'));

        var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAYAAACJm/9dAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAE/9JREFUeJztnXmQVeWZxn/dIA2UgsriGmNNrEQNTqSio0IEFXeFkqi4kpngEhXjqMm4MIldkrE1bnGIMmPcUkOiIi6gJIragLKI0Songo5ZJlHGFTADaoRuhZ4/nnPmnO4+l+7bfc85d3l+VV18373n3Ptyvve53/5+da1L6jDdYjgwBhgNHALMBn6Sq0VdcxlwGvACsAx4HliTq0VlRlNzY+LrfTO2o5LoDxwOHAmMA/4WiP+KzM3DqCJpAA4K/i4F2oBXgWbgWWAxsDEv48oZC6M9Q4EJwInAMcDAfM0pOXXA14K/y4FPgQXAfOBxYF1+ppUXFgYMBiYCp6PaoU+B694HFqEmyVJgVSbW9Y6bgCeBb6Am4GHALrH3B6L/+0RgM6pFHgQeAzZkaWi5UVejfYx64AjgXOAk1OToSCtqajyFHGZlVsalzH7oB+BYJJR+Cde0oKbi3cBCYEtWxmVNoT5GrQljGHAecD7wxYT3P0bNirlIEB9lZ1ouDEICOQk1H7dLuOYt4C7gZ8Da7EzLhloXxv7AJcCZdK4dWpAIHkDt7FrtjA5A/aszkFiSntP9wAzgP7M1LT0KCaM+YzuyZixy+leAb9O+sN9AHdDd0S/mbGpXFKD/+2z0LHZHz+aN2PsN6Bm+gjrsY7M2MEuqVRhHoU7yYjS6FPI5MAc4FNgHzUN4JKYz69Cz2Qc9qzno2YUcjZ7t8iBddVSbMEYDzwFPA6Nir28Afgx8CZiERpVM91iKntnfoGcYH606BNUez6GRr6qhWoSxF/AoKsQxsdfXAj9AHe2rgNXZm1Y1/A96hl8E/pn2HfExwBJUBntlb1rpqXRhbA/cDLyGxuJDPgSuBPYErqPGx+RLzAagCT3bK9GzDpmIyuJmVDYVS6UKow74e+APwPeIxuI/AX6Emkw3opldkw6fome8F3rmnwSv90Nl8gdURhU57FmJwtgHdfx+jpZwgCag7gW+DFyDa4gsWY+e+ZdRGYSTgUNRGS1GZVZRVJIwtgF+iMbQ4/2IF4ADgHOA93Kwy4j3UBkcgMokZAwqsx+iMqwIKkUYI4AXgelEzab1wAVoNOSVnOwynXkFlckFqIxAZTYdleGInOwqinIXRh1wMfASMDL2+hxgb+BOqngdTwWzBZXN3qisQkaisryYMu97lLMwhgHzgJ+ivRGgIcJJwd8HOdllus8HROUVDu/2R2U6D5VxWVKuwjgEVcnjY689jqrhOYl3mHJmDiq7x2OvjUdlfEguFnVBOQrju2gmdbcgvwmYitbweFtm5bIGleFUVKagMn4OlXlZUU7C6A/MQqs3w9GLN4ADgZloW6apbNpQWR5ItEBxG1Tms4iazLlTLsLYCW2IOTv22iNor3Il7JQzxbEKle0jsdfORj6wUy4WdaAchDEC+A1RW3MzcAVwKtW/UaiW+QiV8RWozEE+8Bu0yzBX8hbGwaiNuUeQ/xi1Q2/CTadaoA2V9Umo7EG+8Dw57/fIUxhHAs8AOwb5t9Cy8fm5WWTyYj4q+7eC/PZoOfspeRmUlzBOBn4FbBvkX0XVaLUEHDDFsxL5wG+DfAOKWHJOHsbkIYwpaAtluLRjEdol5nVO5j20tmpRkO+DAjFclLUhWQvjUhSSJYzdNA84DneyTcRHyCfmBfk64HYUbjQzshTGVOBWojUys9GoREuGNpjKoAX5xuwgXwfcQoY1R1bCmILWx4SimAWcBXyW0febyuMz5COzgnxYc0zJ4suzEMZEFKwrFMVDKAzL5oJ3GCM2I195KMjXIV86Ke0vTlsYR6CRhbBPMReYjEVhus9mNCseRpfvg5pYR6T5pWkKYz8UNSIcfVqIzmpoTfE7TXXyGfKdhUG+H/Kt1GbI0xLGMODXKJI4aIz6m1gUpue0Ih8Kw4MORj6Wyp6ONITRADyBwjyC4hEdjwMUmN6zAUU+fDPI7458LSlafa9IQxh3oZWToP/ICcDbKXyPqU3WouDT4Q/tQcjnSkqphXEJ6lyDOk2T8TIPU3pW0n4QZzLyvZJRSmGMQislQ65C1ZwxafAEioQYchPt4xX3ilIJYygaaw5HoB5BM5XGpMmtwMNBuh/ywaGFL+8+pRBGHYpAF+7R/h2anfR+CpM2bWj1bbhNdjfki70OzVMKYVxEFM1jE955Z7Il3AkYHvoznhKsqeqtML6KIluHfB93tk32rEK+F3Iz8s0e0xth9EXVVhjZ4QkUAcKYPPg3orhV/YH76MVx3b0RxhXA3wXpdehoYPcrTF60oRN5w6PjDkQ+2iN6Kox9UOj3kAtxMDSTP2uQL4ZcA+zbkw/qiTDqULUVTsM/RDRkZkzePEy0TL0B+WrRo1Q9Eca3iEKbrKfEM47GlIBLgP8N0mPQyU5FUawwdqDz7Lajjpty4wPg6lj+RqIwTd2iWGE0Ei3zXUEKi7eMKRF3IR8F+ew1W7m2E8UI4ytEEydbUIRqH9piypWOPnoR8uFuUYwwbiKKQj4LeLmIe43Jg5eJgilsQ/tuwFbprjBGEy37+IT27TdjypmriY5aHo/OB+yS7grjulj6JzhqoKkc3gNui+X/pTs3dUcYRxMNz/4FLyc3lcfNyHdBvnxMVzd0RxiNsfQNeO+2qTw2IN8N6XKEqithjCXaFbUWuKNndhmTOzOJ1lGNoovzN7oSxrRY+jbg057bZUyu/BX1j0OmFboQti6Mkah/AVr64SXlptKZiXwZ5NsjC124NWFcGkvfHftAYyqV9bRfrXFpoQvrWpckLjwcigKl9Qc+B74ErC6hgcbkxR7Af6NNTK3Abk3Njes6XlSoxvgO0c68R7EoTPWwGvk0KLLIBUkXJQmjHu3GC5lRWruMyZ24T58zbdy1nXSQJIxxwJ5B+nVgWentMiZXliHfBvn6kR0vSBJG/JTMu0tvkzFlQdy3O53S1LHzPRht8mhA56DtTjQpYkw1MQR4h8jXd25qbvz/kdeONcZEor3cT2FRmOrlQ3S+Bsjn2x1f1lEYZ8TSD6RolDHlwP2x9JnxN+JNqWHAu2h892NgZ7wExFQ3A4H3ge3QkQK7NjU3roH2NcaJRJHb5mNRmOrnU+TroEMvw8147YQxIZaeizG1QdzXTwwTYVNqAOpoD0Q99GGoOWVMtTMIRTBsQBHThzQ1N24Ma4zDkCgAFmNRmBqhqbnxI+C5IDsAOByiplR85m9BhnYZUw48FUsfCcnCeCYzc4wpD+I+Pw7UxxiOhqzq0HDtbgk3GlOVNDUrpMG0cde+A+yKjhPYuR7F2QknM57PxTpj8ifsZ9QBh9ajYGohS7O3x5iyIL6KfFQ9cHDsBQvD1Cpx3z+4LzAHnV3Whg75M6YWWQVciZpSrYX2fBtTE4Sd746U4pxvY6oOC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxLoC1wKNABtwC3A5lwtMiYHpo27tg/wPaAOaO0LnAqMCt5fAPw2J9uMyZMRwI+D9PJ6YEXszW9kb48xZUHc91fUA8sKvGlMLTE6ll5eDyxF/QuAMdnbY0xZMDb4tw1YUg+sAVYGL+6K2lrG1AzTxl07Avk+wMqm5sY14XBtc+y6o7I1y5jcift8M0TzGM/E3jgmM3OMKQ+OjaWfBahrXVIHMABYBwwEWoBhwMdZW2dMDgxC3YkGYCMwpKm5cWNYY2wEng7SDcBx2dtnTC4ci3weYEFTc+NGaL8k5IlY+qSsrDImZ+K+/qsw0VEYnwfpE1GzyphqZgDyddBSqMfDN+LCWAssCtLbAeMzMc2Y/DgB+TrAwqbmxjXhGx1X194fS5+WtlXG5MyZsfQD8Tc6CmMuGpUCOB4YkqJRxuTJEOTjIJ9/LP5mR2GsR+IA9dS/lappxuTHZKLRqLlNzY3r428mbVS6N5Y+Ny2rjMmZuG/f2/HNJGE8C7wZpPel/apDY6qB0cBXg/SbBLPdcZKEsQW4J5a/pORmGZMvcZ++p6m5cUvHCwrt+f53ok74N4E9SmyYMXmxB/JpgFbk650oJIx1wOwg3Rf4bklNMyY/LkY+DfBgU3PjuqSLthYl5LZY+lxg+xIZZkxeDAbOi+VvK3Th1oTxCtHCwu2BC3tvlzG5chHRD/wzyMcT6SquVFMsfRleP2Uql4HIh0Ou39rFXQnjOWB5kB4GTO25XcbkylTkwyCfXrSVa7sViXB6LH0VaqcZU0kMRr4b8qOubuiOMBagmgNgR+Dy4u0yJle+j3wX5MtPdXVDd2PX/iCWvhzYpTi7jMmNXVAY2pAfFLowTneFsZRoh9+2dNFxMaaMuB75LMiHl3bnpmKinf8T8FmQngwcUMS9xuTBAchXQb57RXdvLEYYvwNmxu77aZH3G5MlHX10JvBGMTcXw3S0BRbgYNrPIhpTTpyHfBS0xGn6Vq7tRLHC+AtqUoVcD+xU5GcYkzbDad8PvgL5brfpSVPoP4iGb3cA/rUHn2FMmsxAvgnwPPDzYj+gJ8JoQ+umwmXppwGn9OBzjEmDU4gCebQgX20rfHkyPe08/xft22wzUfVlTJ4MB+6I5acDr/fkg3ozqnQj8FKQHgbchc4vMyYP6pAPhj/QLyMf7RG9EcbnwLeBTUF+Al6abvLjQuSDoCbUPxBF1iya3s5DvEb7SZNbgP16+ZnGFMsI4OZY/irkmz2mFBN0twPzg3R/YA4KrW5MFgxCPjcgyD9JCUZKSyGMNmAK8E6Q/wqK0+P+hkmbOhTRZu8g/w5qQhU9CtWRUi3pWIuGyFqD/MnoMHFj0uRyoqmCVuSDawpf3n1KudZpGe1nxW/AEdNNeownOrAe5HvLClxbNKVeBDgD+EWQ7gPMwp1xU3r2Q77VJ8j/AvleyUhjdex5wItBejA6pWb3FL7H1CbD0AEv4RbrF0lhMWsawtiExpPfDvJfAH6N94qb3jMYhXTaM8i/jXxtU6Ebekpa+ynWoLMHNgT5/YBHgX4pfZ+pfvohH9o/yG9APlaSznZH0txotBLFCA1Hqo5AYT8tDlMs2yDfOSLItyLfWpnWF6a9A28hcBY6+A90Qma802RMV/RBnevwdNXN6IiwhWl+aRZbUx8GvkM06TIJuA+Lw3RNH+Qrk4J8G3A+8EjaX5zVnu170JkEoTgmA79EVaQxSWyDaoowmEEb8qFOpx+lQZbBDG5HM5WhOE4DHsJ9DtOZfsg3Tg/ybSho2u1ZGZB1lI/bUFUY73M8hRcdmohBaCFg2KdoQ+ez3JqlEXmEv7mb9uuqDkd7yB3d0OyMfCEcfdqMfkjvKHhHSuQVF+oR4ETgr0F+fxSB2stHapcRwAtE8xQtwBnohzRz8gyY9gxwJFFYkz3RIrAT8jLI5MYJ6IdxzyC/HjgO7bPIhbwjCa4ADgNWB/ntgHlopaT3c1Q/dahTPQ+VPcgXxtLF+RVpk7cwQLOXB6FqFDR2fSPeCVjthDvvbiKa01qBfOHVvIwKKQdhALyPOly/jL12Mlo5OSIXi0yajEBle3LstfvRQMz7uVjUgXIRBmiF5NnAPxJFVd8bhei5CDetqoE6VJYvEW1H/QyV+VmksEq2p5STMEJmoF+OcA95fzRcNxcHdatkhqMyvAOVKaiMD6PEm4xKQTkKAzQ6NRJtcgqZgPojp+ZikekNp6CymxB7bT4q4+WJd+RMuQoDFGBhPKpmwyp2OFoqMBtHWa8EhgMPok52WNtvQjPZE4iOlCg7ylkYoOUAM4ADaX9Y+SQUP/d8yv//UIvUo7J5gyjAMqgMD0Rrnnod4iZNKsWpVqFhvEaipSQ7AHcCS1CVbMqDkahM7iQKxd+Kyu4gVJZlT6UIAzR6MZ3owYeMQgF878HrrfJkF1QGL6MyCQl/uKYTjTaWPZUkjJDX0czoFHSEFOj/MQX4PXAtDryQJYPRM/89KoPQp9YF+bH0MBR/nlSiMEDt0/vQWPhMoqjW2wLXAH9Ey0oG5mJdbTAQPeM/omceHhn8OSqTfVAZlXVfohCVKoyQD4GpwNdQiJ6QoWhZyZ+BaXhpSSkZhJ7pn9EzHhp770lUFlOJavOKpNKFEfI6WqF5KO37H8OB69DCtBtQjCvTM76ADnxcjZ5pfLJ1CXr2x1OBzaYkqkUYIUuBMcAxRIsSQe3gK4E/oTmQ0dmbVrGMRs/sT+jciXj/bQVwLHrmS7M3LT2qTRghT6ORkcODdEhfNAeyFB0schmwY+bWlT9D0LN5DT2rSejZhTyNnu0hwILMrcuAahVGyGJUe3wdHWnbEntvX7SP+F3gMbTUZAC1ywAkgMfQGqZb0TMKaUHP8OvomS7O1rxsqWtdUlOLVoejGdnzgD0S3v8IreGZi4I0fJydabmwHWoKTUR9tKRBitXo0MefkVI4zDxpam5MfL3WhBFSj/Z/nI/W7DQkXNOCdpE9jbbhVsSMbTcYARwFHI2aQ4X+748jQTQDWzKzLmMKCaNv4qvVzxbg2eBve/SLeTowjmg3WQP6NT02yL+Lmg/Lgr9VRGGAypU+SAijg7/DgF0LXLsZiWA2Cp68PgP7ypZarTEKMQzVIOPRr+rWJgivRkPA5cxVaIi1EJ+i2vAJVEOU7WrXtHCN0T3WovU+96DO6OEoksk4FNqn0n9F2tC+iGZUWy4CNuZqUZliYRRmI5pND2fUd0JDwKPRMGVLgfvKiRa0EegF1PxbDnyQq0UVwv8BNYmwIpIWBvwAAAAASUVORK5CYII=';

        var trafficWay = [{
            name: '15-34',
            value: 591
        },{
            name: '35-54',
            value: 7422
        },{
            name: '55-75',
            value: 39170
        },{
            name: '75+',
            value: 71443
        }];

        var data = [];
        var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
        for (var i = 0; i < trafficWay.length; i++) {
            data.push({
                value: trafficWay[i].value,
                name: trafficWay[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 20,
                        borderColor:color[i],
                        shadowColor: color[i]
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            });
        }
        var seriesOption = [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [45, 45],
            /*hoverAnimation: false,*/

            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#ddd',
                        formatter: function(params) {
                            var percent = 0;
                            var total = 0;
                            for (var i = 0; i < trafficWay.length; i++) {
                                total += trafficWay[i].value;
                            }
                            percent = ((params.value / total) * 100).toFixed(0);
                            if(params.name !== '') {
                                return '年龄段：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                            }else {
                                return '';
                            }
                        },
                    },
                    labelLine: {
                        length:30,
                        length2:40,
                        show: true,
                        color:'#00ffff'
                    }
                }
            },
            data: data
        }];
        option = {
            /*backgroundColor: '#0A2E5D',*/
            color : color,
            title: {
                text: '年龄段',
                top: '0%',
                textAlign: "center",
                left: "49%",
                textStyle: {
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: '400'
                }
            },
            graphic: {
                elements: [{
                    type: "image",
                    z: 3,
                    style: {
                        image: img,
                        width: 140,
                        height: 140
                    },
                    left: 'center',
                    top:  'center',
                    position: [20, 20]
                }]
            },
            tooltip: {
                show: false
            },
            legend: {
                icon: "circle",
                orient: 'horizontal',
                // x: 'left',
                data:['15-34','35-54','55-75','75+'],
                right: 80,
                bottom: 1,
                align: 'right',
                textStyle: {
                    color: "#fff"
                },
                itemGap: 20,
                padding: [5, 20],
            },
            toolbox: {
                show: false
            },
            series: seriesOption
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


        myChart.currentIndex = -1;

        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart3'));

        option = {
            /*backgroundColor: '#000',*/
            "animation": true,
            "title": {
                /*"text": 24,*/
               /* "subtext": "沥青工",*/
                "x": "center",
                "y": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 10,
                    "fontWeight": "normal",
                    "align": "center",
                    "width": "200px"
                },
                "subtextStyle": {
                    "color": "#fff",
                    "fontSize": 12,
                    "fontWeight": "normal",
                    "align": "center"
                }
            },
            "legend": {
                "width": "100%",
                "left": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 12
                },
                "icon": "circle",
                "right": "0",
                "bottom": "0",
                "padding": [15, 20],
                "itemGap": 5,
                "data": ["化妆品", "手机", "电脑", "羽绒服", "扫地机", "电视", "洗发露", "其它"]
            },
            "series": [{
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["20%", "43%"],
                "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                "startAngle": 135,
                "labelLine": {
                    "normal": {
                        "length": 15
                    }
                },
                "label": {
                    "normal": {
                        "formatter": "{b|{b}:}  {per|{d}%} ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 12,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#b3e5ff",
                                "fontSize": 16,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 8],
                                "borderRadius": 2
                            }
                        },
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 16
                        }
                    }
                },
                "emphasis": {
                    "label": {
                        "show": true,
                        "formatter": "{b|{b}:}  {per|{d}%}  ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 22,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#fff",
                                "fontSize": 14,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 6],
                                "borderRadius": 2
                            }
                        }
                    }
                },
                "data": [{
                    "name": "New York",
                    "value": 338519
                },
                    {
                        "name": "New Jersey",
                        "value": 137085
                    },
                    {
                        "name": "Massachusetts",
                        "value": 76743
                    },
                    {
                        "name": "Illinois",
                        "value": 76008
                    },
                    {
                        "name": "California",
                        "value": 66825
                    },
                    {
                        "name": "Pennsylvania",
                        "value": 58661
                    },
                    {
                        "name": "Michigan",
                        "value": 46735
                    },
                    {
                        "name": "Florida",
                        "value": 39993
                    }]
            }, {
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["15%", "14%"],
                "label": {
                    "show": false
                },
                "data": [{
                    "value": 78,
                    "name": "实例1",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "#9F17FF"
                                }, {
                                    "offset": 0.2,
                                    "color": "#01A4F7"
                                }, {
                                    "offset": 0.5,
                                    "color": "#FE2C8A"
                                }, {
                                    "offset": 0.8,
                                    "color": "#FEE449"
                                }, {
                                    "offset": 1,
                                    "color": "#00FFA8"
                                }]
                            }
                        }
                    }
                }]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.currentIndex = -1;
        //myChart.setOption(option);
        //console.log(option.series[0].data[0]);
        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);

        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis3() {
        var myChart = echarts.init(document.getElementById('chart4'));

        var colors = ['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)'];

        option = {
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: function(params) {
                    // 系列
                    let html = params[0].name + "<br>";

                    for (var i = 0; i < params.length; i++) {

                        // 获取每个系列对应的颜色值
                        html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';

                        // 通过判断指定系列增加 % 符号
                        if (option.series[params[i].seriesIndex].type == "line") {
                            html += params[i].seriesName + ": " + params[i].value + "%<br>";
                        } else {
                            html += params[i].seriesName + ": " + params[i].value + "<br>";
                        }
                    }
                    return html;
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                textStyle: {
                    color: '#fff'
                },
                data: ['确诊人数', '死亡人数', '轻症人数']
            },
            // 缩放组件
            /*dataZoom: {
                type: 'slider'
            },*/
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: '{value} 人',
                    textStyle: {
                        color: "#ffffff" //X轴文字颜色
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月','6月', '7月', '8月', '9月', '10月','11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                name: '确诊人数',
                min: 50000000,
                max: 110000000,
                position: 'right',
                offset: 5,
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 人'
                }
            },
                {
                    type: 'value',
                    name: '死亡人数',
                    min: 600000,
                    max: 1100000,
                    position: 'right',
                    offset: 100,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                },
                {
                    type: 'value',
                    name: '轻症人数',
                    min: 70000000,
                    max: 100000000,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                }
            ],
            series: [{
                name: '确诊人数',
                type: 'bar',
                data: [74989495, 78942813, 80004185, 81259033, 84140997,87469077,91114530,94335008,96144226,97233018,98516131,100462184],
                itemStyle: {
                    normal: {
                        barBorderRadius: 2
                    }
                }
            },
                {
                    barGap: '0%', // 增加偏移量使重叠显示
                    name: '死亡人数',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [885943, 948855, 979236, 992010, 1003571,1014452,1026331,1042167,1055290,1066150,1087873,1099837],
                    itemStyle: {
                        normal: {
                            barBorderRadius: 2
                        }
                    }
                },
                {
                    name: '轻症人数',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [ 74103552, 77993958,79024949, 80267023, 83137426, 86454625,90088299,93292841,95088936,96166868,97428258, 99362447],
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis4() {
        var myChart = echarts.init(document.getElementById('chart5'));

        var option = {
            tooltip: {trigger: 'axis',axisPointer: {lineStyle: {color: '#fff'}}},
            legend: {
                icon: 'rect',
                itemWidth: 14,itemHeight: 8,itemGap:8,
                data: ['Hispanic or Latino', 'Non-Hispanic American Indian or Alaska Native', 'Non-Hispanic Asian','Non-Hispanic Black','Non-Hispanic White'],
                right: '10px',top: '0px',
                textStyle: {fontSize: 12,color: '#fff'}
            },
            grid: {x:65,y:60,x2:50,y2:30},
            xAxis: [{
                type: 'category',boundaryGap: false,axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {textStyle: {color:'#fff'}},
                data:[
                    "Alabama",
                    "Alaska",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "Florida",
                    "Georgia",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico"
                ]
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {lineStyle: {color: '#57617B'}},
                min:0,
                max:4000,
                interval: 300,
                axisLabel: {margin: 2,textStyle: {fontSize: 10},textStyle: {color:'#fff'},formatter: function (value, index) {
                        return value / 1000000+ '%';
                    },   },
                splitLine: {lineStyle: {color: '#57617B'}}
            }],
            series: [{
                name: 'Hispanic or Latino',type: 'line',smooth: true,lineStyle: {normal: {width: 1}},
                yAxisIndex:0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(185,150,248,0.3)'
                        }, {
                            offset: 0.1,
                            color: 'rgba(185,150,248,0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: { color: '#B996F8'}},
                data: [
                    "55.25",
                    "0",
                    "194.15",
                    "42.88",
                    "164.41",
                    "308.47",
                    "605.28",
                    "0",
                    "782.34",
                    "151.37",
                    "96.42",
                    "0",
                    "0",
                    "626.88",
                    "187.27",
                    "180.01",
                    "62.65",
                    "0",
                    "254.3",
                    "0",
                    "588.77",
                    "585.44",
                    "238.91",
                    "116.4",
                    "0",
                    "0",
                    "0",
                    "180.66",
                    "107.81",
                    "0"
                ],
            }, {
                name: 'Non-Hispanic American Indian or Alaska Native',type: 'line',smooth: true,lineStyle: { normal: {width: 2}},
                yAxisIndex:0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(3, 194, 236, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(3, 194, 236, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#03C2EC'}},
                data: [
                    "0",
                    "0",
                    "1069.83",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "3680.74",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ]
            }, {
                name: 'Non-Hispanic Asian',type: 'line',smooth: true,lineStyle: {normal: {width: 1}},
                yAxisIndex:0,

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(218, 57, 20, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(218, 57, 20, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 8
                    }
                },
                itemStyle: {normal: {color: '#DA3914'}},
                data:[
                    "0",
                    "0",
                    "0",
                    "0",
                    "140.210",
                    "222.38",
                    "207.9",
                    "0",
                    "0",
                    "47.39",
                    "25.36",
                    "0",
                    "0",
                    "407.31",
                    "57.1",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "314.9",
                    "432.48",
                    "150.27",
                    "109.15",
                    "0",
                    "0",
                    "0",
                    "0",
                    "188.2",
                    "0"
                ]
            },{
                name: 'Non-Hispanic Black',type: 'line',smooth: true,lineStyle: {normal: {width: 2}},
                yAxisIndex:0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(232, 190, 49, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(232, 190, 49, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#E8BE31'}},
                data: [
                    "368.62",
                    "0",
                    "118.9",
                    "91.48",
                    "210.92",
                    "419.52",
                    "1508.52",
                    "519.87",
                    "1316.79",
                    "204.04",
                    "305.78",
                    "0",
                    "0",
                    "917.53",
                    "715.17",
                    "71.63",
                    "280.27",
                    "213.49",
                    "1007.68",
                    "0",
                    "751.84",
                    "1191.05",
                    "1568.9",
                    "258.33",
                    "458.86",
                    "436.93",
                    "0",
                    "0",
                    "176.65",
                    "0"
                ]
            },{
                name: 'Non-Hispanic White',type: 'line',smooth: true,lineStyle: {normal: {width: 2}},
                yAxisIndex:0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(232, 190, 49, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(232, 190, 49, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#31e834'}},
                data: [
                    "158.95",
                    "0",
                    "185.81",
                    "67.35",
                    "121.66",
                    "251.24",
                    "1164.36",
                    "584.38",
                    "200.06",
                    "138.97",
                    "191.05",
                    "0",
                    "54.22",
                    "364.64",
                    "356.35",
                    "208.49",
                    "68.72",
                    "114.84",
                    "452.8",
                    "73.71",
                    "463.08",
                    "1221.26",
                    "385.22",
                    "246.88",
                    "252.52",
                    "112.68",
                    "0",
                    "101.67",
                    "140.3",
                    "265.02"
                ]
            }]


        };
        /*var myChart = echarts.init(document.getElementById('channel_handle_detail'));
        myChart.clear();
        if(data.handleTimeData.length>0){
            myChart.setOption(option);
        }else{
            noDataTip($("#channel_handle_detail"));
        }*/
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function ceshis5() {
        var myChart = echarts.init(document.getElementById('map'));


        let usaJson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "id": "01",
                "properties": {
                    "name": "Alabama"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [-87.359296, 35.00118],
                            [-85.606675, 34.984749],
                            [-85.431413, 34.124869],
                            [-85.184951, 32.859696],
                            [-85.069935, 32.580372],
                            [-84.960397, 32.421541],
                            [-85.004212, 32.322956],
                            [-84.889196, 32.262709],
                            [-85.058981, 32.13674],
                            [-85.053504, 32.01077],
                            [-85.141136, 31.840985],
                            [-85.042551, 31.539753],
                            [-85.113751, 31.27686],
                            [-85.004212, 31.003013],
                            [-85.497137, 30.997536],
                            [-87.600282, 30.997536],
                            [-87.633143, 30.86609],
                            [-87.408589, 30.674397],
                            [-87.446927, 30.510088],
                            [-87.37025, 30.427934],
                            [-87.518128, 30.280057],
                            [-87.655051, 30.247195],
                            [-87.90699, 30.411504],
                            [-87.934375, 30.657966],
                            [-88.011052, 30.685351],
                            [-88.10416, 30.499135],
                            [-88.137022, 30.318396],
                            [-88.394438, 30.367688],
                            [-88.471115, 31.895754],
                            [-88.241084, 33.796253],
                            [-88.098683, 34.891641],
                            [-88.202745, 34.995703],
                            [-87.359296, 35.00118]
                        ]
                    ]
                }
            },
                {
                    "type": "Feature",
                    "id": "02",
                    "properties": {
                        "name": "Alaska"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-131.602021, 55.117982],
                                    [-131.569159, 55.28229],
                                    [-131.355558, 55.183705],
                                    [-131.38842, 55.01392],
                                    [-131.645836, 55.035827],
                                    [-131.602021, 55.117982]
                                ]
                            ],
                            [
                                [
                                    [-131.832052, 55.42469],
                                    [-131.645836, 55.304197],
                                    [-131.749898, 55.128935],
                                    [-131.832052, 55.189182],
                                    [-131.832052, 55.42469]
                                ]
                            ],
                            [
                                [
                                    [-132.976733, 56.437924],
                                    [-132.735747, 56.459832],
                                    [-132.631685, 56.421493],
                                    [-132.664547, 56.273616],
                                    [-132.878148, 56.240754],
                                    [-133.069841, 56.333862],
                                    [-132.976733, 56.437924]
                                ]
                            ],
                            [
                                [
                                    [-133.595627, 56.350293],
                                    [-133.162949, 56.317431],
                                    [-133.05341, 56.125739],
                                    [-132.620732, 55.912138],
                                    [-132.472854, 55.780691],
                                    [-132.4619, 55.671152],
                                    [-132.357838, 55.649245],
                                    [-132.341408, 55.506844],
                                    [-132.166146, 55.364444],
                                    [-132.144238, 55.238474],
                                    [-132.029222, 55.276813],
                                    [-131.97993, 55.178228],
                                    [-131.958022, 54.789365],
                                    [-132.029222, 54.701734],
                                    [-132.308546, 54.718165],
                                    [-132.385223, 54.915335],
                                    [-132.483808, 54.898904],
                                    [-132.686455, 55.046781],
                                    [-132.746701, 54.997489],
                                    [-132.916486, 55.046781],
                                    [-132.889102, 54.898904],
                                    [-132.73027, 54.937242],
                                    [-132.626209, 54.882473],
                                    [-132.675501, 54.679826],
                                    [-132.867194, 54.701734],
                                    [-133.157472, 54.95915],
                                    [-133.239626, 55.090597],
                                    [-133.223195, 55.22752],
                                    [-133.453227, 55.216566],
                                    [-133.453227, 55.320628],
                                    [-133.277964, 55.331582],
                                    [-133.102702, 55.42469],
                                    [-133.17938, 55.588998],
                                    [-133.387503, 55.62186],
                                    [-133.420365, 55.884753],
                                    [-133.497042, 56.0162],
                                    [-133.639442, 55.923092],
                                    [-133.694212, 56.070969],
                                    [-133.546335, 56.142169],
                                    [-133.666827, 56.311955],
                                    [-133.595627, 56.350293]
                                ]
                            ],
                            [
                                [
                                    [-133.738027, 55.556137],
                                    [-133.546335, 55.490413],
                                    [-133.414888, 55.572568],
                                    [-133.283441, 55.534229],
                                    [-133.420365, 55.386352],
                                    [-133.633966, 55.430167],
                                    [-133.738027, 55.556137]
                                ]
                            ],
                            [
                                [
                                    [-133.907813, 56.930849],
                                    [-134.050213, 57.029434],
                                    [-133.885905, 57.095157],
                                    [-133.343688, 57.002049],
                                    [-133.102702, 57.007526],
                                    [-132.932917, 56.82131],
                                    [-132.620732, 56.667956],
                                    [-132.653593, 56.55294],
                                    [-132.817901, 56.492694],
                                    [-133.042456, 56.520078],
                                    [-133.201287, 56.448878],
                                    [-133.420365, 56.492694],
                                    [-133.66135, 56.448878],
                                    [-133.710643, 56.684386],
                                    [-133.688735, 56.837741],
                                    [-133.869474, 56.843218],
                                    [-133.907813, 56.930849]
                                ]
                            ],
                            [
                                [
                                    [-134.115936, 56.48174],
                                    [-134.25286, 56.558417],
                                    [-134.400737, 56.722725],
                                    [-134.417168, 56.848695],
                                    [-134.296675, 56.908941],
                                    [-134.170706, 56.848695],
                                    [-134.143321, 56.952757],
                                    [-133.748981, 56.772017],
                                    [-133.710643, 56.596755],
                                    [-133.847566, 56.574848],
                                    [-133.935197, 56.377678],
                                    [-133.836612, 56.322908],
                                    [-133.957105, 56.092877],
                                    [-134.110459, 56.142169],
                                    [-134.132367, 55.999769],
                                    [-134.230952, 56.070969],
                                    [-134.291198, 56.350293],
                                    [-134.115936, 56.48174]
                                ]
                            ],
                            [
                                [
                                    [-134.636246, 56.28457],
                                    [-134.669107, 56.169554],
                                    [-134.806031, 56.235277],
                                    [-135.178463, 56.67891],
                                    [-135.413971, 56.810356],
                                    [-135.331817, 56.914418],
                                    [-135.424925, 57.166357],
                                    [-135.687818, 57.369004],
                                    [-135.419448, 57.566174],
                                    [-135.298955, 57.48402],
                                    [-135.063447, 57.418296],
                                    [-134.849846, 57.407343],
                                    [-134.844369, 57.248511],
                                    [-134.636246, 56.728202],
                                    [-134.636246, 56.28457]
                                ]
                            ],
                            [
                                [
                                    [-134.712923, 58.223407],
                                    [-134.373353, 58.14673],
                                    [-134.176183, 58.157683],
                                    [-134.187137, 58.081006],
                                    [-133.902336, 57.807159],
                                    [-134.099505, 57.850975],
                                    [-134.148798, 57.757867],
                                    [-133.935197, 57.615466],
                                    [-133.869474, 57.363527],
                                    [-134.083075, 57.297804],
                                    [-134.154275, 57.210173],
                                    [-134.499322, 57.029434],
                                    [-134.603384, 57.034911],
                                    [-134.6472, 57.226604],
                                    [-134.575999, 57.341619],
                                    [-134.608861, 57.511404],
                                    [-134.729354, 57.719528],
                                    [-134.707446, 57.829067],
                                    [-134.784123, 58.097437],
                                    [-134.91557, 58.212453],
                                    [-134.953908, 58.409623],
                                    [-134.712923, 58.223407]
                                ]
                            ],
                            [
                                [
                                    [-135.857603, 57.330665],
                                    [-135.715203, 57.330665],
                                    [-135.567326, 57.149926],
                                    [-135.633049, 57.023957],
                                    [-135.857603, 56.996572],
                                    [-135.824742, 57.193742],
                                    [-135.857603, 57.330665]
                                ]
                            ],
                            [
                                [
                                    [-136.279328, 58.206976],
                                    [-135.978096, 58.201499],
                                    [-135.780926, 58.28913],
                                    [-135.496125, 58.168637],
                                    [-135.64948, 58.037191],
                                    [-135.59471, 57.987898],
                                    [-135.45231, 58.135776],
                                    [-135.107263, 58.086483],
                                    [-134.91557, 57.976944],
                                    [-135.025108, 57.779775],
                                    [-134.937477, 57.763344],
                                    [-134.822462, 57.500451],
                                    [-135.085355, 57.462112],
                                    [-135.572802, 57.675713],
                                    [-135.556372, 57.456635],
                                    [-135.709726, 57.369004],
                                    [-135.890465, 57.407343],
                                    [-136.000004, 57.544266],
                                    [-136.208128, 57.637374],
                                    [-136.366959, 57.829067],
                                    [-136.569606, 57.916698],
                                    [-136.558652, 58.075529],
                                    [-136.421728, 58.130299],
                                    [-136.377913, 58.267222],
                                    [-136.279328, 58.206976]
                                ]
                            ],
                            [
                                [
                                    [-147.079854, 60.200582],
                                    [-147.501579, 59.948643],
                                    [-147.53444, 59.850058],
                                    [-147.874011, 59.784335],
                                    [-147.80281, 59.937689],
                                    [-147.435855, 60.09652],
                                    [-147.205824, 60.271782],
                                    [-147.079854, 60.200582]
                                ]
                            ],
                            [
                                [
                                    [-147.561825, 60.578491],
                                    [-147.616594, 60.370367],
                                    [-147.758995, 60.156767],
                                    [-147.956165, 60.227967],
                                    [-147.791856, 60.474429],
                                    [-147.561825, 60.578491]
                                ]
                            ],
                            [
                                [
                                    [-147.786379, 70.245291],
                                    [-147.682318, 70.201475],
                                    [-147.162008, 70.15766],
                                    [-146.888161, 70.185044],
                                    [-146.510252, 70.185044],
                                    [-146.099482, 70.146706],
                                    [-145.858496, 70.168614],
                                    [-145.622988, 70.08646],
                                    [-145.195787, 69.993352],
                                    [-144.620708, 69.971444],
                                    [-144.461877, 70.026213],
                                    [-144.078491, 70.059075],
                                    [-143.914183, 70.130275],
                                    [-143.497935, 70.141229],
                                    [-143.503412, 70.091936],
                                    [-143.25695, 70.119321],
                                    [-142.747594, 70.042644],
                                    [-142.402547, 69.916674],
                                    [-142.079408, 69.856428],
                                    [-142.008207, 69.801659],
                                    [-141.712453, 69.790705],
                                    [-141.433129, 69.697597],
                                    [-141.378359, 69.63735],
                                    [-141.208574, 69.686643],
                                    [-141.00045, 69.648304],
                                    [-141.00045, 60.304644],
                                    [-140.53491, 60.22249],
                                    [-140.474664, 60.310121],
                                    [-139.987216, 60.184151],
                                    [-139.696939, 60.342983],
                                    [-139.088998, 60.359413],
                                    [-139.198537, 60.091043],
                                    [-139.045183, 59.997935],
                                    [-138.700135, 59.910304],
                                    [-138.623458, 59.767904],
                                    [-137.604747, 59.242118],
                                    [-137.445916, 58.908024],
                                    [-137.265177, 59.001132],
                                    [-136.827022, 59.159963],
                                    [-136.580559, 59.16544],
                                    [-136.465544, 59.285933],
                                    [-136.476498, 59.466672],
                                    [-136.301236, 59.466672],
                                    [-136.25742, 59.625503],
                                    [-135.945234, 59.663842],
                                    [-135.479694, 59.800766],
                                    [-135.025108, 59.565257],
                                    [-135.068924, 59.422857],
                                    [-134.959385, 59.280456],
                                    [-134.701969, 59.247595],
                                    [-134.378829, 59.033994],
                                    [-134.400737, 58.973748],
                                    [-134.25286, 58.858732],
                                    [-133.842089, 58.727285],
                                    [-133.173903, 58.152206],
                                    [-133.075318, 57.998852],
                                    [-132.867194, 57.845498],
                                    [-132.560485, 57.505928],
                                    [-132.253777, 57.21565],
                                    [-132.368792, 57.095157],
                                    [-132.05113, 57.051341],
                                    [-132.127807, 56.876079],
                                    [-131.870391, 56.804879],
                                    [-131.837529, 56.602232],
                                    [-131.580113, 56.613186],
                                    [-131.087188, 56.405062],
                                    [-130.78048, 56.366724],
                                    [-130.621648, 56.268139],
                                    [-130.468294, 56.240754],
                                    [-130.424478, 56.142169],
                                    [-130.101339, 56.114785],
                                    [-130.002754, 55.994292],
                                    [-130.150631, 55.769737],
                                    [-130.128724, 55.583521],
                                    [-129.986323, 55.276813],
                                    [-130.095862, 55.200136],
                                    [-130.336847, 54.920812],
                                    [-130.687372, 54.718165],
                                    [-130.785957, 54.822227],
                                    [-130.917403, 54.789365],
                                    [-131.010511, 54.997489],
                                    [-130.983126, 55.08512],
                                    [-131.092665, 55.189182],
                                    [-130.862634, 55.298721],
                                    [-130.928357, 55.337059],
                                    [-131.158389, 55.200136],
                                    [-131.284358, 55.287767],
                                    [-131.426759, 55.238474],
                                    [-131.843006, 55.457552],
                                    [-131.700606, 55.698537],
                                    [-131.963499, 55.616383],
                                    [-131.974453, 55.49589],
                                    [-132.182576, 55.588998],
                                    [-132.226392, 55.704014],
                                    [-132.083991, 55.829984],
                                    [-132.127807, 55.955953],
                                    [-132.324977, 55.851892],
                                    [-132.522147, 56.076446],
                                    [-132.642639, 56.032631],
                                    [-132.719317, 56.218847],
                                    [-132.527624, 56.339339],
                                    [-132.341408, 56.339339],
                                    [-132.396177, 56.487217],
                                    [-132.297592, 56.67891],
                                    [-132.450946, 56.673433],
                                    [-132.768609, 56.837741],
                                    [-132.993164, 57.034911],
                                    [-133.51895, 57.177311],
                                    [-133.507996, 57.577128],
                                    [-133.677781, 57.62642],
                                    [-133.639442, 57.790728],
                                    [-133.814705, 57.834544],
                                    [-134.072121, 58.053622],
                                    [-134.143321, 58.168637],
                                    [-134.586953, 58.206976],
                                    [-135.074401, 58.502731],
                                    [-135.282525, 59.192825],
                                    [-135.38111, 59.033994],
                                    [-135.337294, 58.891593],
                                    [-135.140124, 58.617746],
                                    [-135.189417, 58.573931],
                                    [-135.05797, 58.349376],
                                    [-135.085355, 58.201499],
                                    [-135.277048, 58.234361],
                                    [-135.430402, 58.398669],
                                    [-135.633049, 58.426053],
                                    [-135.91785, 58.382238],
                                    [-135.912373, 58.617746],
                                    [-136.087635, 58.814916],
                                    [-136.246466, 58.75467],
                                    [-136.876314, 58.962794],
                                    [-136.931084, 58.902547],
                                    [-136.586036, 58.836824],
                                    [-136.317666, 58.672516],
                                    [-136.213604, 58.667039],
                                    [-136.180743, 58.535592],
                                    [-136.043819, 58.382238],
                                    [-136.388867, 58.294607],
                                    [-136.591513, 58.349376],
                                    [-136.59699, 58.212453],
                                    [-136.859883, 58.316515],
                                    [-136.947514, 58.393192],
                                    [-137.111823, 58.393192],
                                    [-137.566409, 58.590362],
                                    [-137.900502, 58.765624],
                                    [-137.933364, 58.869686],
                                    [-138.11958, 59.02304],
                                    [-138.634412, 59.132579],
                                    [-138.919213, 59.247595],
                                    [-139.417615, 59.379041],
                                    [-139.746231, 59.505011],
                                    [-139.718846, 59.641934],
                                    [-139.625738, 59.598119],
                                    [-139.5162, 59.68575],
                                    [-139.625738, 59.88292],
                                    [-139.488815, 59.992458],
                                    [-139.554538, 60.041751],
                                    [-139.801, 59.833627],
                                    [-140.315833, 59.696704],
                                    [-140.92925, 59.745996],
                                    [-141.444083, 59.871966],
                                    [-141.46599, 59.970551],
                                    [-141.706976, 59.948643],
                                    [-141.964392, 60.019843],
                                    [-142.539471, 60.085566],
                                    [-142.873564, 60.091043],
                                    [-143.623905, 60.036274],
                                    [-143.892275, 59.997935],
                                    [-144.231845, 60.140336],
                                    [-144.65357, 60.206059],
                                    [-144.785016, 60.29369],
                                    [-144.834309, 60.441568],
                                    [-145.124586, 60.430614],
                                    [-145.223171, 60.299167],
                                    [-145.738004, 60.474429],
                                    [-145.820158, 60.551106],
                                    [-146.351421, 60.408706],
                                    [-146.608837, 60.238921],
                                    [-146.718376, 60.397752],
                                    [-146.608837, 60.485383],
                                    [-146.455483, 60.463475],
                                    [-145.951604, 60.578491],
                                    [-146.017328, 60.666122],
                                    [-146.252836, 60.622307],
                                    [-146.345944, 60.737322],
                                    [-146.565022, 60.753753],
                                    [-146.784099, 61.044031],
                                    [-146.866253, 60.972831],
                                    [-147.172962, 60.934492],
                                    [-147.271547, 60.972831],
                                    [-147.375609, 60.879723],
                                    [-147.758995, 60.912584],
                                    [-147.775426, 60.808523],
                                    [-148.032842, 60.781138],
                                    [-148.153334, 60.819476],
                                    [-148.065703, 61.005692],
                                    [-148.175242, 61.000215],
                                    [-148.350504, 60.803046],
                                    [-148.109519, 60.737322],
                                    [-148.087611, 60.594922],
                                    [-147.939734, 60.441568],
                                    [-148.027365, 60.277259],
                                    [-148.219058, 60.332029],
                                    [-148.273827, 60.249875],
                                    [-148.087611, 60.217013],
                                    [-147.983549, 59.997935],
                                    [-148.251919, 59.95412],
                                    [-148.399797, 59.997935],
                                    [-148.635305, 59.937689],
                                    [-148.755798, 59.986981],
                                    [-149.067984, 59.981505],
                                    [-149.05703, 60.063659],
                                    [-149.204907, 60.008889],
                                    [-149.287061, 59.904827],
                                    [-149.418508, 59.997935],
                                    [-149.582816, 59.866489],
                                    [-149.511616, 59.806242],
                                    [-149.741647, 59.729565],
                                    [-149.949771, 59.718611],
                                    [-150.031925, 59.61455],
                                    [-150.25648, 59.521442],
                                    [-150.409834, 59.554303],
                                    [-150.579619, 59.444764],
                                    [-150.716543, 59.450241],
                                    [-151.001343, 59.225687],
                                    [-151.308052, 59.209256],
                                    [-151.406637, 59.280456],
                                    [-151.592853, 59.159963],
                                    [-151.976239, 59.253071],
                                    [-151.888608, 59.422857],
                                    [-151.636669, 59.483103],
                                    [-151.47236, 59.472149],
                                    [-151.423068, 59.537872],
                                    [-151.127313, 59.669319],
                                    [-151.116359, 59.778858],
                                    [-151.505222, 59.63098],
                                    [-151.828361, 59.718611],
                                    [-151.8667, 59.778858],
                                    [-151.702392, 60.030797],
                                    [-151.423068, 60.211536],
                                    [-151.379252, 60.359413],
                                    [-151.297098, 60.386798],
                                    [-151.264237, 60.545629],
                                    [-151.406637, 60.720892],
                                    [-151.06159, 60.786615],
                                    [-150.404357, 61.038554],
                                    [-150.245526, 60.939969],
                                    [-150.042879, 60.912584],
                                    [-149.741647, 61.016646],
                                    [-150.075741, 61.15357],
                                    [-150.207187, 61.257632],
                                    [-150.47008, 61.246678],
                                    [-150.656296, 61.29597],
                                    [-150.711066, 61.252155],
                                    [-151.023251, 61.180954],
                                    [-151.165652, 61.044031],
                                    [-151.477837, 61.011169],
                                    [-151.800977, 60.852338],
                                    [-151.833838, 60.748276],
                                    [-152.080301, 60.693507],
                                    [-152.13507, 60.578491],
                                    [-152.310332, 60.507291],
                                    [-152.392486, 60.304644],
                                    [-152.732057, 60.173197],
                                    [-152.567748, 60.069136],
                                    [-152.704672, 59.915781],
                                    [-153.022334, 59.888397],
                                    [-153.049719, 59.691227],
                                    [-153.345474, 59.620026],
                                    [-153.438582, 59.702181],
                                    [-153.586459, 59.548826],
                                    [-153.761721, 59.543349],
                                    [-153.72886, 59.433811],
                                    [-154.117723, 59.368087],
                                    [-154.1944, 59.066856],
                                    [-153.750768, 59.050425],
                                    [-153.400243, 58.968271],
                                    [-153.301658, 58.869686],
                                    [-153.444059, 58.710854],
                                    [-153.679567, 58.612269],
                                    [-153.898645, 58.606793],
                                    [-153.920553, 58.519161],
                                    [-154.062953, 58.4863],
                                    [-153.99723, 58.376761],
                                    [-154.145107, 58.212453],
                                    [-154.46277, 58.059098],
                                    [-154.643509, 58.059098],
                                    [-154.818771, 58.004329],
                                    [-154.988556, 58.015283],
                                    [-155.120003, 57.955037],
                                    [-155.081664, 57.872883],
                                    [-155.328126, 57.829067],
                                    [-155.377419, 57.708574],
                                    [-155.547204, 57.785251],
                                    [-155.73342, 57.549743],
                                    [-156.045606, 57.566174],
                                    [-156.023698, 57.440204],
                                    [-156.209914, 57.473066],
                                    [-156.34136, 57.418296],
                                    [-156.34136, 57.248511],
                                    [-156.549484, 56.985618],
                                    [-156.883577, 56.952757],
                                    [-157.157424, 56.832264],
                                    [-157.20124, 56.766541],
                                    [-157.376502, 56.859649],
                                    [-157.672257, 56.607709],
                                    [-157.754411, 56.67891],
                                    [-157.918719, 56.657002],
                                    [-157.957058, 56.514601],
                                    [-158.126843, 56.459832],
                                    [-158.32949, 56.48174],
                                    [-158.488321, 56.339339],
                                    [-158.208997, 56.295524],
                                    [-158.510229, 55.977861],
                                    [-159.375585, 55.873799],
                                    [-159.616571, 55.594475],
                                    [-159.676817, 55.654722],
                                    [-159.643955, 55.829984],
                                    [-159.813741, 55.857368],
                                    [-160.027341, 55.791645],
                                    [-160.060203, 55.720445],
                                    [-160.394296, 55.605429],
                                    [-160.536697, 55.473983],
                                    [-160.580512, 55.567091],
                                    [-160.668143, 55.457552],
                                    [-160.865313, 55.528752],
                                    [-161.232268, 55.358967],
                                    [-161.506115, 55.364444],
                                    [-161.467776, 55.49589],
                                    [-161.588269, 55.62186],
                                    [-161.697808, 55.517798],
                                    [-161.686854, 55.408259],
                                    [-162.053809, 55.074166],
                                    [-162.179779, 55.15632],
                                    [-162.218117, 55.03035],
                                    [-162.470057, 55.052258],
                                    [-162.508395, 55.249428],
                                    [-162.661749, 55.293244],
                                    [-162.716519, 55.222043],
                                    [-162.579595, 55.134412],
                                    [-162.645319, 54.997489],
                                    [-162.847965, 54.926289],
                                    [-163.00132, 55.079643],
                                    [-163.187536, 55.090597],
                                    [-163.220397, 55.03035],
                                    [-163.034181, 54.942719],
                                    [-163.373752, 54.800319],
                                    [-163.14372, 54.76198],
                                    [-163.138243, 54.696257],
                                    [-163.329936, 54.74555],
                                    [-163.587352, 54.614103],
                                    [-164.085754, 54.61958],
                                    [-164.332216, 54.531949],
                                    [-164.354124, 54.466226],
                                    [-164.638925, 54.389548],
                                    [-164.847049, 54.416933],
                                    [-164.918249, 54.603149],
                                    [-164.710125, 54.663395],
                                    [-164.551294, 54.88795],
                                    [-164.34317, 54.893427],
                                    [-163.894061, 55.041304],
                                    [-163.532583, 55.046781],
                                    [-163.39566, 54.904381],
                                    [-163.291598, 55.008443],
                                    [-163.313505, 55.128935],
                                    [-163.105382, 55.183705],
                                    [-162.880827, 55.183705],
                                    [-162.579595, 55.446598],
                                    [-162.245502, 55.682106],
                                    [-161.807347, 55.89023],
                                    [-161.292514, 55.983338],
                                    [-161.078914, 55.939523],
                                    [-160.87079, 55.999769],
                                    [-160.816021, 55.912138],
                                    [-160.931036, 55.813553],
                                    [-160.805067, 55.736876],
                                    [-160.766728, 55.857368],
                                    [-160.509312, 55.868322],
                                    [-160.438112, 55.791645],
                                    [-160.27928, 55.76426],
                                    [-160.273803, 55.857368],
                                    [-160.536697, 55.939523],
                                    [-160.558604, 55.994292],
                                    [-160.383342, 56.251708],
                                    [-160.147834, 56.399586],
                                    [-159.830171, 56.541986],
                                    [-159.326293, 56.667956],
                                    [-158.959338, 56.848695],
                                    [-158.784076, 56.782971],
                                    [-158.641675, 56.810356],
                                    [-158.701922, 56.925372],
                                    [-158.658106, 57.034911],
                                    [-158.378782, 57.264942],
                                    [-157.995396, 57.41282],
                                    [-157.688688, 57.609989],
                                    [-157.705118, 57.719528],
                                    [-157.458656, 58.497254],
                                    [-157.07527, 58.705377],
                                    [-157.119086, 58.869686],
                                    [-158.039212, 58.634177],
                                    [-158.32949, 58.661562],
                                    [-158.40069, 58.760147],
                                    [-158.564998, 58.803962],
                                    [-158.619768, 58.913501],
                                    [-158.767645, 58.864209],
                                    [-158.860753, 58.694424],
                                    [-158.701922, 58.480823],
                                    [-158.893615, 58.387715],
                                    [-159.0634, 58.420577],
                                    [-159.392016, 58.760147],
                                    [-159.616571, 58.929932],
                                    [-159.731586, 58.929932],
                                    [-159.808264, 58.803962],
                                    [-159.906848, 58.782055],
                                    [-160.054726, 58.886116],
                                    [-160.235465, 58.902547],
                                    [-160.317619, 59.072332],
                                    [-160.854359, 58.88064],
                                    [-161.33633, 58.743716],
                                    [-161.374669, 58.667039],
                                    [-161.752577, 58.552023],
                                    [-161.938793, 58.656085],
                                    [-161.769008, 58.776578],
                                    [-161.829255, 59.061379],
                                    [-161.955224, 59.36261],
                                    [-161.703285, 59.48858],
                                    [-161.911409, 59.740519],
                                    [-162.092148, 59.88292],
                                    [-162.234548, 60.091043],
                                    [-162.448149, 60.178674],
                                    [-162.502918, 59.997935],
                                    [-162.760334, 59.959597],
                                    [-163.171105, 59.844581],
                                    [-163.66403, 59.795289],
                                    [-163.9324, 59.806242],
                                    [-164.162431, 59.866489],
                                    [-164.189816, 60.02532],
                                    [-164.386986, 60.074613],
                                    [-164.699171, 60.29369],
                                    [-164.962064, 60.337506],
                                    [-165.268773, 60.578491],
                                    [-165.060649, 60.68803],
                                    [-165.016834, 60.890677],
                                    [-165.175665, 60.846861],
                                    [-165.197573, 60.972831],
                                    [-165.120896, 61.076893],
                                    [-165.323543, 61.170001],
                                    [-165.34545, 61.071416],
                                    [-165.591913, 61.109754],
                                    [-165.624774, 61.279539],
                                    [-165.816467, 61.301447],
                                    [-165.920529, 61.416463],
                                    [-165.915052, 61.558863],
                                    [-166.106745, 61.49314],
                                    [-166.139607, 61.630064],
                                    [-165.904098, 61.662925],
                                    [-166.095791, 61.81628],
                                    [-165.756221, 61.827233],
                                    [-165.756221, 62.013449],
                                    [-165.674067, 62.139419],
                                    [-165.044219, 62.539236],
                                    [-164.912772, 62.659728],
                                    [-164.819664, 62.637821],
                                    [-164.874433, 62.807606],
                                    [-164.633448, 63.097884],
                                    [-164.425324, 63.212899],
                                    [-164.036462, 63.262192],
                                    [-163.73523, 63.212899],
                                    [-163.313505, 63.037637],
                                    [-163.039658, 63.059545],
                                    [-162.661749, 63.22933],
                                    [-162.272887, 63.486746],
                                    [-162.075717, 63.514131],
                                    [-162.026424, 63.448408],
                                    [-161.555408, 63.448408],
                                    [-161.13916, 63.503177],
                                    [-160.766728, 63.771547],
                                    [-160.766728, 63.837271],
                                    [-160.952944, 64.08921],
                                    [-160.974852, 64.237087],
                                    [-161.26513, 64.395918],
                                    [-161.374669, 64.532842],
                                    [-161.078914, 64.494503],
                                    [-160.79959, 64.609519],
                                    [-160.783159, 64.719058],
                                    [-161.144637, 64.921705],
                                    [-161.413007, 64.762873],
                                    [-161.664946, 64.790258],
                                    [-161.900455, 64.702627],
                                    [-162.168825, 64.680719],
                                    [-162.234548, 64.620473],
                                    [-162.541257, 64.532842],
                                    [-162.634365, 64.384965],
                                    [-162.787719, 64.324718],
                                    [-162.858919, 64.49998],
                                    [-163.045135, 64.538319],
                                    [-163.176582, 64.401395],
                                    [-163.253259, 64.467119],
                                    [-163.598306, 64.565704],
                                    [-164.304832, 64.560227],
                                    [-164.80871, 64.450688],
                                    [-165.000403, 64.434257],
                                    [-165.411174, 64.49998],
                                    [-166.188899, 64.576658],
                                    [-166.391546, 64.636904],
                                    [-166.484654, 64.735489],
                                    [-166.413454, 64.872412],
                                    [-166.692778, 64.987428],
                                    [-166.638008, 65.113398],
                                    [-166.462746, 65.179121],
                                    [-166.517516, 65.337952],
                                    [-166.796839, 65.337952],
                                    [-167.026871, 65.381768],
                                    [-167.47598, 65.414629],
                                    [-167.711489, 65.496784],
                                    [-168.072967, 65.578938],
                                    [-168.105828, 65.682999],
                                    [-167.541703, 65.819923],
                                    [-166.829701, 66.049954],
                                    [-166.3313, 66.186878],
                                    [-166.046499, 66.110201],
                                    [-165.756221, 66.09377],
                                    [-165.690498, 66.203309],
                                    [-165.86576, 66.21974],
                                    [-165.88219, 66.312848],
                                    [-165.186619, 66.466202],
                                    [-164.403417, 66.581218],
                                    [-163.981692, 66.592172],
                                    [-163.751661, 66.553833],
                                    [-163.872153, 66.389525],
                                    [-163.828338, 66.274509],
                                    [-163.915969, 66.192355],
                                    [-163.768091, 66.060908],
                                    [-163.494244, 66.082816],
                                    [-163.149197, 66.060908],
                                    [-162.749381, 66.088293],
                                    [-162.634365, 66.039001],
                                    [-162.371472, 66.028047],
                                    [-162.14144, 66.077339],
                                    [-161.840208, 66.02257],
                                    [-161.549931, 66.241647],
                                    [-161.341807, 66.252601],
                                    [-161.199406, 66.208786],
                                    [-161.128206, 66.334755],
                                    [-161.528023, 66.395002],
                                    [-161.911409, 66.345709],
                                    [-161.87307, 66.510017],
                                    [-162.174302, 66.68528],
                                    [-162.502918, 66.740049],
                                    [-162.601503, 66.89888],
                                    [-162.344087, 66.937219],
                                    [-162.015471, 66.778388],
                                    [-162.075717, 66.652418],
                                    [-161.916886, 66.553833],
                                    [-161.571838, 66.438817],
                                    [-161.489684, 66.55931],
                                    [-161.884024, 66.718141],
                                    [-161.714239, 67.002942],
                                    [-161.851162, 67.052235],
                                    [-162.240025, 66.991988],
                                    [-162.639842, 67.008419],
                                    [-162.700088, 67.057712],
                                    [-162.902735, 67.008419],
                                    [-163.740707, 67.128912],
                                    [-163.757138, 67.254881],
                                    [-164.009077, 67.534205],
                                    [-164.211724, 67.638267],
                                    [-164.534863, 67.725898],
                                    [-165.192096, 67.966884],
                                    [-165.493328, 68.059992],
                                    [-165.794559, 68.081899],
                                    [-166.243668, 68.246208],
                                    [-166.681824, 68.339316],
                                    [-166.703731, 68.372177],
                                    [-166.375115, 68.42147],
                                    [-166.227238, 68.574824],
                                    [-166.216284, 68.881533],
                                    [-165.329019, 68.859625],
                                    [-164.255539, 68.930825],
                                    [-163.976215, 68.985595],
                                    [-163.532583, 69.138949],
                                    [-163.110859, 69.374457],
                                    [-163.023228, 69.609966],
                                    [-162.842489, 69.812613],
                                    [-162.470057, 69.982398],
                                    [-162.311225, 70.108367],
                                    [-161.851162, 70.311014],
                                    [-161.779962, 70.256245],
                                    [-161.396576, 70.239814],
                                    [-160.837928, 70.343876],
                                    [-160.487404, 70.453415],
                                    [-159.649432, 70.792985],
                                    [-159.33177, 70.809416],
                                    [-159.298908, 70.760123],
                                    [-158.975769, 70.798462],
                                    [-158.658106, 70.787508],
                                    [-158.033735, 70.831323],
                                    [-157.420318, 70.979201],
                                    [-156.812377, 71.285909],
                                    [-156.565915, 71.351633],
                                    [-156.522099, 71.296863],
                                    [-155.585543, 71.170894],
                                    [-155.508865, 71.083263],
                                    [-155.832005, 70.968247],
                                    [-155.979882, 70.96277],
                                    [-155.974405, 70.809416],
                                    [-155.503388, 70.858708],
                                    [-155.476004, 70.940862],
                                    [-155.262403, 71.017539],
                                    [-155.191203, 70.973724],
                                    [-155.032372, 71.148986],
                                    [-154.566832, 70.990155],
                                    [-154.643509, 70.869662],
                                    [-154.353231, 70.8368],
                                    [-154.183446, 70.7656],
                                    [-153.931507, 70.880616],
                                    [-153.487874, 70.886093],
                                    [-153.235935, 70.924431],
                                    [-152.589656, 70.886093],
                                    [-152.26104, 70.842277],
                                    [-152.419871, 70.606769],
                                    [-151.817408, 70.546523],
                                    [-151.773592, 70.486276],
                                    [-151.187559, 70.382214],
                                    [-151.182082, 70.431507],
                                    [-150.760358, 70.49723],
                                    [-150.355064, 70.491753],
                                    [-150.349588, 70.436984],
                                    [-150.114079, 70.431507],
                                    [-149.867617, 70.508184],
                                    [-149.462323, 70.519138],
                                    [-149.177522, 70.486276],
                                    [-148.78866, 70.404122],
                                    [-148.607921, 70.420553],
                                    [-148.350504, 70.305537],
                                    [-148.202627, 70.349353],
                                    [-147.961642, 70.316491],
                                    [-147.786379, 70.245291]
                                ]
                            ],
                            [
                                [
                                    [-152.94018, 58.026237],
                                    [-152.945657, 57.982421],
                                    [-153.290705, 58.048145],
                                    [-153.044242, 58.305561],
                                    [-152.819688, 58.327469],
                                    [-152.666333, 58.562977],
                                    [-152.496548, 58.354853],
                                    [-152.354148, 58.426053],
                                    [-152.080301, 58.311038],
                                    [-152.080301, 58.152206],
                                    [-152.480117, 58.130299],
                                    [-152.655379, 58.059098],
                                    [-152.94018, 58.026237]
                                ]
                            ],
                            [
                                [
                                    [-153.958891, 57.538789],
                                    [-153.67409, 57.670236],
                                    [-153.931507, 57.69762],
                                    [-153.936983, 57.812636],
                                    [-153.723383, 57.889313],
                                    [-153.570028, 57.834544],
                                    [-153.548121, 57.719528],
                                    [-153.46049, 57.796205],
                                    [-153.455013, 57.96599],
                                    [-153.268797, 57.889313],
                                    [-153.235935, 57.998852],
                                    [-153.071627, 57.933129],
                                    [-152.874457, 57.933129],
                                    [-152.721103, 57.993375],
                                    [-152.469163, 57.889313],
                                    [-152.469163, 57.599035],
                                    [-152.151501, 57.620943],
                                    [-152.359625, 57.42925],
                                    [-152.74301, 57.505928],
                                    [-152.60061, 57.379958],
                                    [-152.710149, 57.275896],
                                    [-152.907319, 57.325188],
                                    [-152.912796, 57.128019],
                                    [-153.214027, 57.073249],
                                    [-153.312612, 56.991095],
                                    [-153.498828, 57.067772],
                                    [-153.695998, 56.859649],
                                    [-153.849352, 56.837741],
                                    [-154.013661, 56.744633],
                                    [-154.073907, 56.969187],
                                    [-154.303938, 56.848695],
                                    [-154.314892, 56.919895],
                                    [-154.523016, 56.991095],
                                    [-154.539447, 57.193742],
                                    [-154.742094, 57.275896],
                                    [-154.627078, 57.511404],
                                    [-154.227261, 57.659282],
                                    [-153.980799, 57.648328],
                                    [-153.958891, 57.538789]
                                ]
                            ],
                            [
                                [
                                    [-154.53397, 56.602232],
                                    [-154.742094, 56.399586],
                                    [-154.807817, 56.432447],
                                    [-154.53397, 56.602232]
                                ]
                            ],
                            [
                                [
                                    [-155.634835, 55.923092],
                                    [-155.476004, 55.912138],
                                    [-155.530773, 55.704014],
                                    [-155.793666, 55.731399],
                                    [-155.837482, 55.802599],
                                    [-155.634835, 55.923092]
                                ]
                            ],
                            [
                                [
                                    [-159.890418, 55.28229],
                                    [-159.950664, 55.068689],
                                    [-160.257373, 54.893427],
                                    [-160.109495, 55.161797],
                                    [-160.005433, 55.134412],
                                    [-159.890418, 55.28229]
                                ]
                            ],
                            [
                                [
                                    [-160.520266, 55.358967],
                                    [-160.33405, 55.358967],
                                    [-160.339527, 55.249428],
                                    [-160.525743, 55.128935],
                                    [-160.690051, 55.211089],
                                    [-160.794113, 55.134412],
                                    [-160.854359, 55.320628],
                                    [-160.79959, 55.380875],
                                    [-160.520266, 55.358967]
                                ]
                            ],
                            [
                                [
                                    [-162.256456, 54.981058],
                                    [-162.234548, 54.893427],
                                    [-162.349564, 54.838658],
                                    [-162.437195, 54.931766],
                                    [-162.256456, 54.981058]
                                ]
                            ],
                            [
                                [
                                    [-162.415287, 63.634624],
                                    [-162.563165, 63.536039],
                                    [-162.612457, 63.62367],
                                    [-162.415287, 63.634624]
                                ]
                            ],
                            [
                                [
                                    [-162.80415, 54.488133],
                                    [-162.590549, 54.449795],
                                    [-162.612457, 54.367641],
                                    [-162.782242, 54.373118],
                                    [-162.80415, 54.488133]
                                ]
                            ],
                            [
                                [
                                    [-165.548097, 54.29644],
                                    [-165.476897, 54.181425],
                                    [-165.630251, 54.132132],
                                    [-165.685021, 54.252625],
                                    [-165.548097, 54.29644]
                                ]
                            ],
                            [
                                [
                                    [-165.73979, 54.15404],
                                    [-166.046499, 54.044501],
                                    [-166.112222, 54.121178],
                                    [-165.980775, 54.219763],
                                    [-165.73979, 54.15404]
                                ]
                            ],
                            [
                                [
                                    [-166.364161, 60.359413],
                                    [-166.13413, 60.397752],
                                    [-166.084837, 60.326552],
                                    [-165.88219, 60.342983],
                                    [-165.685021, 60.277259],
                                    [-165.646682, 59.992458],
                                    [-165.750744, 59.89935],
                                    [-166.00816, 59.844581],
                                    [-166.062929, 59.745996],
                                    [-166.440838, 59.855535],
                                    [-166.6161, 59.850058],
                                    [-166.994009, 59.992458],
                                    [-167.125456, 59.992458],
                                    [-167.344534, 60.074613],
                                    [-167.421211, 60.206059],
                                    [-167.311672, 60.238921],
                                    [-166.93924, 60.206059],
                                    [-166.763978, 60.310121],
                                    [-166.577762, 60.321075],
                                    [-166.495608, 60.392275],
                                    [-166.364161, 60.359413]
                                ]
                            ],
                            [
                                [
                                    [-166.375115, 54.01164],
                                    [-166.210807, 53.934962],
                                    [-166.5449, 53.748746],
                                    [-166.539423, 53.715885],
                                    [-166.117699, 53.852808],
                                    [-166.112222, 53.776131],
                                    [-166.282007, 53.683023],
                                    [-166.555854, 53.622777],
                                    [-166.583239, 53.529669],
                                    [-166.878994, 53.431084],
                                    [-167.13641, 53.425607],
                                    [-167.306195, 53.332499],
                                    [-167.623857, 53.250345],
                                    [-167.793643, 53.337976],
                                    [-167.459549, 53.442038],
                                    [-167.355487, 53.425607],
                                    [-167.103548, 53.513238],
                                    [-167.163794, 53.611823],
                                    [-167.021394, 53.715885],
                                    [-166.807793, 53.666592],
                                    [-166.785886, 53.732316],
                                    [-167.015917, 53.754223],
                                    [-167.141887, 53.825424],
                                    [-167.032348, 53.945916],
                                    [-166.643485, 54.017116],
                                    [-166.561331, 53.880193],
                                    [-166.375115, 54.01164]
                                ]
                            ],
                            [
                                [
                                    [-168.790446, 53.157237],
                                    [-168.40706, 53.34893],
                                    [-168.385152, 53.431084],
                                    [-168.237275, 53.524192],
                                    [-168.007243, 53.568007],
                                    [-167.886751, 53.518715],
                                    [-167.842935, 53.387268],
                                    [-168.270136, 53.244868],
                                    [-168.500168, 53.036744],
                                    [-168.686384, 52.965544],
                                    [-168.790446, 53.157237]
                                ]
                            ],
                            [
                                [
                                    [-169.74891, 52.894344],
                                    [-169.705095, 52.795759],
                                    [-169.962511, 52.790282],
                                    [-169.989896, 52.856005],
                                    [-169.74891, 52.894344]
                                ]
                            ],
                            [
                                [
                                    [-170.148727, 57.221127],
                                    [-170.28565, 57.128019],
                                    [-170.313035, 57.221127],
                                    [-170.148727, 57.221127]
                                ]
                            ],
                            [
                                [
                                    [-170.669036, 52.697174],
                                    [-170.603313, 52.604066],
                                    [-170.789529, 52.538343],
                                    [-170.816914, 52.636928],
                                    [-170.669036, 52.697174]
                                ]
                            ],
                            [
                                [
                                    [-171.742517, 63.716778],
                                    [-170.94836, 63.5689],
                                    [-170.488297, 63.69487],
                                    [-170.280174, 63.683916],
                                    [-170.093958, 63.612716],
                                    [-170.044665, 63.492223],
                                    [-169.644848, 63.4265],
                                    [-169.518879, 63.366254],
                                    [-168.99857, 63.338869],
                                    [-168.686384, 63.295053],
                                    [-168.856169, 63.147176],
                                    [-169.108108, 63.180038],
                                    [-169.376478, 63.152653],
                                    [-169.513402, 63.08693],
                                    [-169.639372, 62.939052],
                                    [-169.831064, 63.075976],
                                    [-170.055619, 63.169084],
                                    [-170.263743, 63.180038],
                                    [-170.362328, 63.2841],
                                    [-170.866206, 63.415546],
                                    [-171.101715, 63.421023],
                                    [-171.463193, 63.306007],
                                    [-171.73704, 63.366254],
                                    [-171.852055, 63.486746],
                                    [-171.742517, 63.716778]
                                ]
                            ],
                            [
                                [
                                    [-172.432611, 52.390465],
                                    [-172.41618, 52.275449],
                                    [-172.607873, 52.253542],
                                    [-172.569535, 52.352127],
                                    [-172.432611, 52.390465]
                                ]
                            ],
                            [
                                [
                                    [-173.626584, 52.14948],
                                    [-173.495138, 52.105664],
                                    [-173.122706, 52.111141],
                                    [-173.106275, 52.07828],
                                    [-173.549907, 52.028987],
                                    [-173.626584, 52.14948]
                                ]
                            ],
                            [
                                [
                                    [-174.322156, 52.280926],
                                    [-174.327632, 52.379511],
                                    [-174.185232, 52.41785],
                                    [-173.982585, 52.319265],
                                    [-174.059262, 52.226157],
                                    [-174.179755, 52.231634],
                                    [-174.141417, 52.127572],
                                    [-174.333109, 52.116618],
                                    [-174.738403, 52.007079],
                                    [-174.968435, 52.039941],
                                    [-174.902711, 52.116618],
                                    [-174.656249, 52.105664],
                                    [-174.322156, 52.280926]
                                ]
                            ],
                            [
                                [
                                    [-176.469116, 51.853725],
                                    [-176.288377, 51.870156],
                                    [-176.288377, 51.744186],
                                    [-176.518409, 51.760617],
                                    [-176.80321, 51.61274],
                                    [-176.912748, 51.80991],
                                    [-176.792256, 51.815386],
                                    [-176.775825, 51.963264],
                                    [-176.627947, 51.968741],
                                    [-176.627947, 51.859202],
                                    [-176.469116, 51.853725]
                                ]
                            ],
                            [
                                [
                                    [-177.153734, 51.946833],
                                    [-177.044195, 51.897541],
                                    [-177.120872, 51.727755],
                                    [-177.274226, 51.678463],
                                    [-177.279703, 51.782525],
                                    [-177.153734, 51.946833]
                                ]
                            ],
                            [
                                [
                                    [-178.123152, 51.919448],
                                    [-177.953367, 51.913971],
                                    [-177.800013, 51.793479],
                                    [-177.964321, 51.651078],
                                    [-178.123152, 51.919448]
                                ]
                            ],
                            [
                                [
                                    [-186.892443, 52.992929],
                                    [-186.706227, 52.927205],
                                    [-186.695274, 52.823143],
                                    [-187.09509, 52.762897],
                                    [-187.357983, 52.927205],
                                    [-187.357983, 53.003883],
                                    [-186.892443, 52.992929]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "04",
                    "properties": {
                        "name": "Arizona"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-109.042503, 37.000263],
                                [-109.04798, 31.331629],
                                [-111.074448, 31.331629],
                                [-112.246513, 31.704061],
                                [-114.815198, 32.492741],
                                [-114.72209, 32.717295],
                                [-114.524921, 32.755634],
                                [-114.470151, 32.843265],
                                [-114.524921, 33.029481],
                                [-114.661844, 33.034958],
                                [-114.727567, 33.40739],
                                [-114.524921, 33.54979],
                                [-114.497536, 33.697668],
                                [-114.535874, 33.933176],
                                [-114.415382, 34.108438],
                                [-114.256551, 34.174162],
                                [-114.136058, 34.305608],
                                [-114.333228, 34.448009],
                                [-114.470151, 34.710902],
                                [-114.634459, 34.87521],
                                [-114.634459, 35.00118],
                                [-114.574213, 35.138103],
                                [-114.596121, 35.324319],
                                [-114.678275, 35.516012],
                                [-114.738521, 36.102045],
                                [-114.371566, 36.140383],
                                [-114.251074, 36.01989],
                                [-114.152489, 36.025367],
                                [-114.048427, 36.195153],
                                [-114.048427, 37.000263],
                                [-110.499369, 37.00574],
                                [-109.042503, 37.000263]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "05",
                    "properties": {
                        "name": "Arkansas"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-94.473842, 36.501861],
                                [-90.152536, 36.496384],
                                [-90.064905, 36.304691],
                                [-90.218259, 36.184199],
                                [-90.377091, 35.997983],
                                [-89.730812, 35.997983],
                                [-89.763673, 35.811767],
                                [-89.911551, 35.756997],
                                [-89.944412, 35.603643],
                                [-90.130628, 35.439335],
                                [-90.114197, 35.198349],
                                [-90.212782, 35.023087],
                                [-90.311367, 34.995703],
                                [-90.251121, 34.908072],
                                [-90.409952, 34.831394],
                                [-90.481152, 34.661609],
                                [-90.585214, 34.617794],
                                [-90.568783, 34.420624],
                                [-90.749522, 34.365854],
                                [-90.744046, 34.300131],
                                [-90.952169, 34.135823],
                                [-90.891923, 34.026284],
                                [-91.072662, 33.867453],
                                [-91.231493, 33.560744],
                                [-91.056231, 33.429298],
                                [-91.143862, 33.347144],
                                [-91.089093, 33.13902],
                                [-91.16577, 33.002096],
                                [-93.608485, 33.018527],
                                [-94.041164, 33.018527],
                                [-94.041164, 33.54979],
                                [-94.183564, 33.593606],
                                [-94.380734, 33.544313],
                                [-94.484796, 33.637421],
                                [-94.430026, 35.395519],
                                [-94.616242, 36.501861],
                                [-94.473842, 36.501861]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "06",
                    "properties": {
                        "name": "California"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-123.233256, 42.006186],
                                [-122.378853, 42.011663],
                                [-121.037003, 41.995232],
                                [-120.001861, 41.995232],
                                [-119.996384, 40.264519],
                                [-120.001861, 38.999346],
                                [-118.71478, 38.101128],
                                [-117.498899, 37.21934],
                                [-116.540435, 36.501861],
                                [-115.85034, 35.970598],
                                [-114.634459, 35.00118],
                                [-114.634459, 34.87521],
                                [-114.470151, 34.710902],
                                [-114.333228, 34.448009],
                                [-114.136058, 34.305608],
                                [-114.256551, 34.174162],
                                [-114.415382, 34.108438],
                                [-114.535874, 33.933176],
                                [-114.497536, 33.697668],
                                [-114.524921, 33.54979],
                                [-114.727567, 33.40739],
                                [-114.661844, 33.034958],
                                [-114.524921, 33.029481],
                                [-114.470151, 32.843265],
                                [-114.524921, 32.755634],
                                [-114.72209, 32.717295],
                                [-116.04751, 32.624187],
                                [-117.126467, 32.536556],
                                [-117.24696, 32.668003],
                                [-117.252437, 32.876127],
                                [-117.329114, 33.122589],
                                [-117.471515, 33.297851],
                                [-117.7837, 33.538836],
                                [-118.183517, 33.763391],
                                [-118.260194, 33.703145],
                                [-118.413548, 33.741483],
                                [-118.391641, 33.840068],
                                [-118.566903, 34.042715],
                                [-118.802411, 33.998899],
                                [-119.218659, 34.146777],
                                [-119.278905, 34.26727],
                                [-119.558229, 34.415147],
                                [-119.875891, 34.40967],
                                [-120.138784, 34.475393],
                                [-120.472878, 34.448009],
                                [-120.64814, 34.579455],
                                [-120.609801, 34.858779],
                                [-120.670048, 34.902595],
                                [-120.631709, 35.099764],
                                [-120.894602, 35.247642],
                                [-120.905556, 35.450289],
                                [-121.004141, 35.461243],
                                [-121.168449, 35.636505],
                                [-121.283465, 35.674843],
                                [-121.332757, 35.784382],
                                [-121.716143, 36.195153],
                                [-121.896882, 36.315645],
                                [-121.935221, 36.638785],
                                [-121.858544, 36.6114],
                                [-121.787344, 36.803093],
                                [-121.929744, 36.978355],
                                [-122.105006, 36.956447],
                                [-122.335038, 37.115279],
                                [-122.417192, 37.241248],
                                [-122.400761, 37.361741],
                                [-122.515777, 37.520572],
                                [-122.515777, 37.783465],
                                [-122.329561, 37.783465],
                                [-122.406238, 38.15042],
                                [-122.488392, 38.112082],
                                [-122.504823, 37.931343],
                                [-122.701993, 37.893004],
                                [-122.937501, 38.029928],
                                [-122.97584, 38.265436],
                                [-123.129194, 38.451652],
                                [-123.331841, 38.566668],
                                [-123.44138, 38.698114],
                                [-123.737134, 38.95553],
                                [-123.687842, 39.032208],
                                [-123.824765, 39.366301],
                                [-123.764519, 39.552517],
                                [-123.85215, 39.831841],
                                [-124.109566, 40.105688],
                                [-124.361506, 40.259042],
                                [-124.410798, 40.439781],
                                [-124.158859, 40.877937],
                                [-124.109566, 41.025814],
                                [-124.158859, 41.14083],
                                [-124.065751, 41.442061],
                                [-124.147905, 41.715908],
                                [-124.257444, 41.781632],
                                [-124.213628, 42.000709],
                                [-123.233256, 42.006186]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "08",
                    "properties": {
                        "name": "Colorado"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-107.919731, 41.003906],
                                [-105.728954, 40.998429],
                                [-104.053011, 41.003906],
                                [-102.053927, 41.003906],
                                [-102.053927, 40.001626],
                                [-102.042974, 36.994786],
                                [-103.001438, 37.000263],
                                [-104.337812, 36.994786],
                                [-106.868158, 36.994786],
                                [-107.421329, 37.000263],
                                [-109.042503, 37.000263],
                                [-109.042503, 38.166851],
                                [-109.058934, 38.27639],
                                [-109.053457, 39.125316],
                                [-109.04798, 40.998429],
                                [-107.919731, 41.003906]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "09",
                    "properties": {
                        "name": "Connecticut"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-73.053528, 42.039048],
                                [-71.799309, 42.022617],
                                [-71.799309, 42.006186],
                                [-71.799309, 41.414677],
                                [-71.859555, 41.321569],
                                [-71.947186, 41.338],
                                [-72.385341, 41.261322],
                                [-72.905651, 41.28323],
                                [-73.130205, 41.146307],
                                [-73.371191, 41.102491],
                                [-73.655992, 40.987475],
                                [-73.727192, 41.102491],
                                [-73.48073, 41.21203],
                                [-73.55193, 41.294184],
                                [-73.486206, 42.050002],
                                [-73.053528, 42.039048]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "10",
                    "properties": {
                        "name": "Delaware"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-75.414089, 39.804456],
                                [-75.507197, 39.683964],
                                [-75.611259, 39.61824],
                                [-75.589352, 39.459409],
                                [-75.441474, 39.311532],
                                [-75.403136, 39.065069],
                                [-75.189535, 38.807653],
                                [-75.09095, 38.796699],
                                [-75.047134, 38.451652],
                                [-75.693413, 38.462606],
                                [-75.786521, 39.722302],
                                [-75.616736, 39.831841],
                                [-75.414089, 39.804456]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "11",
                    "properties": {
                        "name": "District of Columbia"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-77.035264, 38.993869],
                                [-76.909294, 38.895284],
                                [-77.040741, 38.791222],
                                [-77.117418, 38.933623],
                                [-77.035264, 38.993869]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "12",
                    "properties": {
                        "name": "Florida"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-85.497137, 30.997536],
                                [-85.004212, 31.003013],
                                [-84.867289, 30.712735],
                                [-83.498053, 30.647012],
                                [-82.216449, 30.570335],
                                [-82.167157, 30.356734],
                                [-82.046664, 30.362211],
                                [-82.002849, 30.564858],
                                [-82.041187, 30.751074],
                                [-81.948079, 30.827751],
                                [-81.718048, 30.745597],
                                [-81.444201, 30.707258],
                                [-81.383954, 30.27458],
                                [-81.257985, 29.787132],
                                [-80.967707, 29.14633],
                                [-80.524075, 28.461713],
                                [-80.589798, 28.41242],
                                [-80.56789, 28.094758],
                                [-80.381674, 27.738757],
                                [-80.091397, 27.021277],
                                [-80.03115, 26.796723],
                                [-80.036627, 26.566691],
                                [-80.146166, 25.739673],
                                [-80.239274, 25.723243],
                                [-80.337859, 25.465826],
                                [-80.304997, 25.383672],
                                [-80.49669, 25.197456],
                                [-80.573367, 25.241272],
                                [-80.759583, 25.164595],
                                [-81.077246, 25.120779],
                                [-81.170354, 25.224841],
                                [-81.126538, 25.378195],
                                [-81.351093, 25.821827],
                                [-81.526355, 25.903982],
                                [-81.679709, 25.843735],
                                [-81.800202, 26.090198],
                                [-81.833064, 26.292844],
                                [-82.041187, 26.517399],
                                [-82.09048, 26.665276],
                                [-82.057618, 26.878877],
                                [-82.172634, 26.917216],
                                [-82.145249, 26.791246],
                                [-82.249311, 26.758384],
                                [-82.566974, 27.300601],
                                [-82.692943, 27.437525],
                                [-82.391711, 27.837342],
                                [-82.588881, 27.815434],
                                [-82.720328, 27.689464],
                                [-82.851774, 27.886634],
                                [-82.676512, 28.434328],
                                [-82.643651, 28.888914],
                                [-82.764143, 28.998453],
                                [-82.802482, 29.14633],
                                [-82.994175, 29.179192],
                                [-83.218729, 29.420177],
                                [-83.399469, 29.518762],
                                [-83.410422, 29.66664],
                                [-83.536392, 29.721409],
                                [-83.640454, 29.885717],
                                [-84.02384, 30.104795],
                                [-84.357933, 30.055502],
                                [-84.341502, 29.902148],
                                [-84.451041, 29.929533],
                                [-84.867289, 29.743317],
                                [-85.310921, 29.699501],
                                [-85.299967, 29.80904],
                                [-85.404029, 29.940487],
                                [-85.924338, 30.236241],
                                [-86.29677, 30.362211],
                                [-86.630863, 30.395073],
                                [-86.910187, 30.373165],
                                [-87.518128, 30.280057],
                                [-87.37025, 30.427934],
                                [-87.446927, 30.510088],
                                [-87.408589, 30.674397],
                                [-87.633143, 30.86609],
                                [-87.600282, 30.997536],
                                [-85.497137, 30.997536]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "13",
                    "properties": {
                        "name": "Georgia"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-83.109191, 35.00118],
                                [-83.322791, 34.787579],
                                [-83.339222, 34.683517],
                                [-83.005129, 34.469916],
                                [-82.901067, 34.486347],
                                [-82.747713, 34.26727],
                                [-82.714851, 34.152254],
                                [-82.55602, 33.94413],
                                [-82.325988, 33.81816],
                                [-82.194542, 33.631944],
                                [-81.926172, 33.462159],
                                [-81.937125, 33.347144],
                                [-81.761863, 33.160928],
                                [-81.493493, 33.007573],
                                [-81.42777, 32.843265],
                                [-81.416816, 32.629664],
                                [-81.279893, 32.558464],
                                [-81.121061, 32.290094],
                                [-81.115584, 32.120309],
                                [-80.885553, 32.032678],
                                [-81.132015, 31.693108],
                                [-81.175831, 31.517845],
                                [-81.279893, 31.364491],
                                [-81.290846, 31.20566],
                                [-81.400385, 31.13446],
                                [-81.444201, 30.707258],
                                [-81.718048, 30.745597],
                                [-81.948079, 30.827751],
                                [-82.041187, 30.751074],
                                [-82.002849, 30.564858],
                                [-82.046664, 30.362211],
                                [-82.167157, 30.356734],
                                [-82.216449, 30.570335],
                                [-83.498053, 30.647012],
                                [-84.867289, 30.712735],
                                [-85.004212, 31.003013],
                                [-85.113751, 31.27686],
                                [-85.042551, 31.539753],
                                [-85.141136, 31.840985],
                                [-85.053504, 32.01077],
                                [-85.058981, 32.13674],
                                [-84.889196, 32.262709],
                                [-85.004212, 32.322956],
                                [-84.960397, 32.421541],
                                [-85.069935, 32.580372],
                                [-85.184951, 32.859696],
                                [-85.431413, 34.124869],
                                [-85.606675, 34.984749],
                                [-84.319594, 34.990226],
                                [-83.618546, 34.984749],
                                [-83.109191, 35.00118]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "15",
                    "properties": {
                        "name": "Hawaii"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-155.634835, 18.948267],
                                    [-155.881297, 19.035898],
                                    [-155.919636, 19.123529],
                                    [-155.886774, 19.348084],
                                    [-156.062036, 19.73147],
                                    [-155.925113, 19.857439],
                                    [-155.826528, 20.032702],
                                    [-155.897728, 20.147717],
                                    [-155.87582, 20.26821],
                                    [-155.596496, 20.12581],
                                    [-155.284311, 20.021748],
                                    [-155.092618, 19.868393],
                                    [-155.092618, 19.736947],
                                    [-154.807817, 19.523346],
                                    [-154.983079, 19.348084],
                                    [-155.295265, 19.26593],
                                    [-155.514342, 19.134483],
                                    [-155.634835, 18.948267]
                                ]
                            ],
                            [
                                [
                                    [-156.587823, 21.029505],
                                    [-156.472807, 20.892581],
                                    [-156.324929, 20.952827],
                                    [-156.00179, 20.793996],
                                    [-156.051082, 20.651596],
                                    [-156.379699, 20.580396],
                                    [-156.445422, 20.60778],
                                    [-156.461853, 20.783042],
                                    [-156.631638, 20.821381],
                                    [-156.697361, 20.919966],
                                    [-156.587823, 21.029505]
                                ]
                            ],
                            [
                                [
                                    [-156.982162, 21.210244],
                                    [-157.080747, 21.106182],
                                    [-157.310779, 21.106182],
                                    [-157.239579, 21.221198],
                                    [-156.982162, 21.210244]
                                ]
                            ],
                            [
                                [
                                    [-157.951581, 21.697691],
                                    [-157.842042, 21.462183],
                                    [-157.896811, 21.325259],
                                    [-158.110412, 21.303352],
                                    [-158.252813, 21.582676],
                                    [-158.126843, 21.588153],
                                    [-157.951581, 21.697691]
                                ]
                            ],
                            [
                                [
                                    [-159.468693, 22.228955],
                                    [-159.353678, 22.218001],
                                    [-159.298908, 22.113939],
                                    [-159.33177, 21.966061],
                                    [-159.446786, 21.872953],
                                    [-159.764448, 21.987969],
                                    [-159.726109, 22.152277],
                                    [-159.468693, 22.228955]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "16",
                    "properties": {
                        "name": "Idaho"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-116.04751, 49.000239],
                                [-116.04751, 47.976051],
                                [-115.724371, 47.696727],
                                [-115.718894, 47.42288],
                                [-115.527201, 47.302388],
                                [-115.324554, 47.258572],
                                [-115.302646, 47.187372],
                                [-114.930214, 46.919002],
                                [-114.886399, 46.809463],
                                [-114.623506, 46.705401],
                                [-114.612552, 46.639678],
                                [-114.322274, 46.645155],
                                [-114.464674, 46.272723],
                                [-114.492059, 46.037214],
                                [-114.387997, 45.88386],
                                [-114.568736, 45.774321],
                                [-114.497536, 45.670259],
                                [-114.546828, 45.560721],
                                [-114.333228, 45.456659],
                                [-114.086765, 45.593582],
                                [-113.98818, 45.703121],
                                [-113.807441, 45.604536],
                                [-113.834826, 45.522382],
                                [-113.736241, 45.330689],
                                [-113.571933, 45.128042],
                                [-113.45144, 45.056842],
                                [-113.456917, 44.865149],
                                [-113.341901, 44.782995],
                                [-113.133778, 44.772041],
                                [-113.002331, 44.448902],
                                [-112.887315, 44.394132],
                                [-112.783254, 44.48724],
                                [-112.471068, 44.481763],
                                [-112.241036, 44.569394],
                                [-112.104113, 44.520102],
                                [-111.868605, 44.563917],
                                [-111.819312, 44.509148],
                                [-111.616665, 44.547487],
                                [-111.386634, 44.75561],
                                [-111.227803, 44.580348],
                                [-111.047063, 44.476286],
                                [-111.047063, 42.000709],
                                [-112.164359, 41.995232],
                                [-114.04295, 41.995232],
                                [-117.027882, 42.000709],
                                [-117.027882, 43.830007],
                                [-116.896436, 44.158624],
                                [-116.97859, 44.240778],
                                [-117.170283, 44.257209],
                                [-117.241483, 44.394132],
                                [-117.038836, 44.750133],
                                [-116.934774, 44.782995],
                                [-116.830713, 44.930872],
                                [-116.847143, 45.02398],
                                [-116.732128, 45.144473],
                                [-116.671881, 45.319735],
                                [-116.463758, 45.61549],
                                [-116.545912, 45.752413],
                                [-116.78142, 45.823614],
                                [-116.918344, 45.993399],
                                [-116.92382, 46.168661],
                                [-117.055267, 46.343923],
                                [-117.038836, 46.426077],
                                [-117.044313, 47.762451],
                                [-117.033359, 49.000239],
                                [-116.04751, 49.000239]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "17",
                    "properties": {
                        "name": "Illinois"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-90.639984, 42.510065],
                                [-88.788778, 42.493634],
                                [-87.802929, 42.493634],
                                [-87.83579, 42.301941],
                                [-87.682436, 42.077386],
                                [-87.523605, 41.710431],
                                [-87.529082, 39.34987],
                                [-87.63862, 39.169131],
                                [-87.512651, 38.95553],
                                [-87.49622, 38.780268],
                                [-87.62219, 38.637868],
                                [-87.655051, 38.506421],
                                [-87.83579, 38.292821],
                                [-87.950806, 38.27639],
                                [-87.923421, 38.15042],
                                [-88.000098, 38.101128],
                                [-88.060345, 37.865619],
                                [-88.027483, 37.799896],
                                [-88.15893, 37.657496],
                                [-88.065822, 37.482234],
                                [-88.476592, 37.389126],
                                [-88.514931, 37.285064],
                                [-88.421823, 37.153617],
                                [-88.547792, 37.071463],
                                [-88.914747, 37.224817],
                                [-89.029763, 37.213863],
                                [-89.183118, 37.038601],
                                [-89.133825, 36.983832],
                                [-89.292656, 36.994786],
                                [-89.517211, 37.279587],
                                [-89.435057, 37.34531],
                                [-89.517211, 37.537003],
                                [-89.517211, 37.690357],
                                [-89.84035, 37.903958],
                                [-89.949889, 37.88205],
                                [-90.059428, 38.013497],
                                [-90.355183, 38.216144],
                                [-90.349706, 38.374975],
                                [-90.179921, 38.632391],
                                [-90.207305, 38.725499],
                                [-90.10872, 38.845992],
                                [-90.251121, 38.917192],
                                [-90.470199, 38.961007],
                                [-90.585214, 38.867899],
                                [-90.661891, 38.928146],
                                [-90.727615, 39.256762],
                                [-91.061708, 39.470363],
                                [-91.368417, 39.727779],
                                [-91.494386, 40.034488],
                                [-91.50534, 40.237135],
                                [-91.417709, 40.379535],
                                [-91.401278, 40.560274],
                                [-91.121954, 40.669813],
                                [-91.09457, 40.823167],
                                [-90.963123, 40.921752],
                                [-90.946692, 41.097014],
                                [-91.111001, 41.239415],
                                [-91.045277, 41.414677],
                                [-90.656414, 41.463969],
                                [-90.344229, 41.589939],
                                [-90.311367, 41.743293],
                                [-90.179921, 41.809016],
                                [-90.141582, 42.000709],
                                [-90.168967, 42.126679],
                                [-90.393521, 42.225264],
                                [-90.420906, 42.329326],
                                [-90.639984, 42.510065]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "18",
                    "properties": {
                        "name": "Indiana"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-85.990061, 41.759724],
                                [-84.807042, 41.759724],
                                [-84.807042, 41.694001],
                                [-84.801565, 40.500028],
                                [-84.817996, 39.103408],
                                [-84.894673, 39.059592],
                                [-84.812519, 38.785745],
                                [-84.987781, 38.780268],
                                [-85.173997, 38.68716],
                                [-85.431413, 38.730976],
                                [-85.42046, 38.533806],
                                [-85.590245, 38.451652],
                                [-85.655968, 38.325682],
                                [-85.83123, 38.27639],
                                [-85.924338, 38.024451],
                                [-86.039354, 37.958727],
                                [-86.263908, 38.051835],
                                [-86.302247, 38.166851],
                                [-86.521325, 38.040881],
                                [-86.504894, 37.931343],
                                [-86.729448, 37.893004],
                                [-86.795172, 37.991589],
                                [-87.047111, 37.893004],
                                [-87.129265, 37.788942],
                                [-87.381204, 37.93682],
                                [-87.512651, 37.903958],
                                [-87.600282, 37.975158],
                                [-87.682436, 37.903958],
                                [-87.934375, 37.893004],
                                [-88.027483, 37.799896],
                                [-88.060345, 37.865619],
                                [-88.000098, 38.101128],
                                [-87.923421, 38.15042],
                                [-87.950806, 38.27639],
                                [-87.83579, 38.292821],
                                [-87.655051, 38.506421],
                                [-87.62219, 38.637868],
                                [-87.49622, 38.780268],
                                [-87.512651, 38.95553],
                                [-87.63862, 39.169131],
                                [-87.529082, 39.34987],
                                [-87.523605, 41.710431],
                                [-87.42502, 41.644708],
                                [-87.118311, 41.644708],
                                [-86.822556, 41.759724],
                                [-85.990061, 41.759724]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "19",
                    "properties": {
                        "name": "Iowa"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-91.368417, 43.501391],
                                [-91.215062, 43.501391],
                                [-91.204109, 43.353514],
                                [-91.056231, 43.254929],
                                [-91.176724, 43.134436],
                                [-91.143862, 42.909881],
                                [-91.067185, 42.75105],
                                [-90.711184, 42.636034],
                                [-90.639984, 42.510065],
                                [-90.420906, 42.329326],
                                [-90.393521, 42.225264],
                                [-90.168967, 42.126679],
                                [-90.141582, 42.000709],
                                [-90.179921, 41.809016],
                                [-90.311367, 41.743293],
                                [-90.344229, 41.589939],
                                [-90.656414, 41.463969],
                                [-91.045277, 41.414677],
                                [-91.111001, 41.239415],
                                [-90.946692, 41.097014],
                                [-90.963123, 40.921752],
                                [-91.09457, 40.823167],
                                [-91.121954, 40.669813],
                                [-91.401278, 40.560274],
                                [-91.417709, 40.379535],
                                [-91.527248, 40.412397],
                                [-91.729895, 40.615043],
                                [-91.833957, 40.609566],
                                [-93.257961, 40.582182],
                                [-94.632673, 40.571228],
                                [-95.7664, 40.587659],
                                [-95.881416, 40.719105],
                                [-95.826646, 40.976521],
                                [-95.925231, 41.201076],
                                [-95.919754, 41.453015],
                                [-96.095016, 41.540646],
                                [-96.122401, 41.67757],
                                [-96.062155, 41.798063],
                                [-96.127878, 41.973325],
                                [-96.264801, 42.039048],
                                [-96.44554, 42.488157],
                                [-96.631756, 42.707235],
                                [-96.544125, 42.855112],
                                [-96.511264, 43.052282],
                                [-96.434587, 43.123482],
                                [-96.560556, 43.222067],
                                [-96.527695, 43.397329],
                                [-96.582464, 43.479483],
                                [-96.451017, 43.501391],
                                [-91.368417, 43.501391]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "20",
                    "properties": {
                        "name": "Kansas"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-101.90605, 40.001626],
                                [-95.306337, 40.001626],
                                [-95.207752, 39.908518],
                                [-94.884612, 39.831841],
                                [-95.109167, 39.541563],
                                [-94.983197, 39.442978],
                                [-94.824366, 39.20747],
                                [-94.610765, 39.158177],
                                [-94.616242, 37.000263],
                                [-100.087706, 37.000263],
                                [-102.042974, 36.994786],
                                [-102.053927, 40.001626],
                                [-101.90605, 40.001626]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "21",
                    "properties": {
                        "name": "Kentucky"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-83.903347, 38.769315],
                                [-83.678792, 38.632391],
                                [-83.519961, 38.703591],
                                [-83.142052, 38.626914],
                                [-83.032514, 38.725499],
                                [-82.890113, 38.758361],
                                [-82.846298, 38.588575],
                                [-82.731282, 38.561191],
                                [-82.594358, 38.424267],
                                [-82.621743, 38.123036],
                                [-82.50125, 37.931343],
                                [-82.342419, 37.783465],
                                [-82.293127, 37.668449],
                                [-82.101434, 37.553434],
                                [-81.969987, 37.537003],
                                [-82.353373, 37.268633],
                                [-82.720328, 37.120755],
                                [-82.720328, 37.044078],
                                [-82.868205, 36.978355],
                                [-82.879159, 36.890724],
                                [-83.070852, 36.852385],
                                [-83.136575, 36.742847],
                                [-83.673316, 36.600446],
                                [-83.689746, 36.584015],
                                [-84.544149, 36.594969],
                                [-85.289013, 36.627831],
                                [-85.486183, 36.616877],
                                [-86.592525, 36.655216],
                                [-87.852221, 36.633308],
                                [-88.071299, 36.677123],
                                [-88.054868, 36.496384],
                                [-89.298133, 36.507338],
                                [-89.418626, 36.496384],
                                [-89.363857, 36.622354],
                                [-89.215979, 36.578538],
                                [-89.133825, 36.983832],
                                [-89.183118, 37.038601],
                                [-89.029763, 37.213863],
                                [-88.914747, 37.224817],
                                [-88.547792, 37.071463],
                                [-88.421823, 37.153617],
                                [-88.514931, 37.285064],
                                [-88.476592, 37.389126],
                                [-88.065822, 37.482234],
                                [-88.15893, 37.657496],
                                [-88.027483, 37.799896],
                                [-87.934375, 37.893004],
                                [-87.682436, 37.903958],
                                [-87.600282, 37.975158],
                                [-87.512651, 37.903958],
                                [-87.381204, 37.93682],
                                [-87.129265, 37.788942],
                                [-87.047111, 37.893004],
                                [-86.795172, 37.991589],
                                [-86.729448, 37.893004],
                                [-86.504894, 37.931343],
                                [-86.521325, 38.040881],
                                [-86.302247, 38.166851],
                                [-86.263908, 38.051835],
                                [-86.039354, 37.958727],
                                [-85.924338, 38.024451],
                                [-85.83123, 38.27639],
                                [-85.655968, 38.325682],
                                [-85.590245, 38.451652],
                                [-85.42046, 38.533806],
                                [-85.431413, 38.730976],
                                [-85.173997, 38.68716],
                                [-84.987781, 38.780268],
                                [-84.812519, 38.785745],
                                [-84.894673, 39.059592],
                                [-84.817996, 39.103408],
                                [-84.43461, 39.103408],
                                [-84.231963, 38.895284],
                                [-84.215533, 38.807653],
                                [-83.903347, 38.769315]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "22",
                    "properties": {
                        "name": "Louisiana"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-93.608485, 33.018527],
                                [-91.16577, 33.002096],
                                [-91.072662, 32.887081],
                                [-91.143862, 32.843265],
                                [-91.154816, 32.640618],
                                [-91.006939, 32.514649],
                                [-90.985031, 32.218894],
                                [-91.105524, 31.988862],
                                [-91.341032, 31.846462],
                                [-91.401278, 31.621907],
                                [-91.499863, 31.643815],
                                [-91.516294, 31.27686],
                                [-91.636787, 31.265906],
                                [-91.565587, 31.068736],
                                [-91.636787, 30.997536],
                                [-89.747242, 30.997536],
                                [-89.845827, 30.66892],
                                [-89.681519, 30.449842],
                                [-89.643181, 30.285534],
                                [-89.522688, 30.181472],
                                [-89.818443, 30.044549],
                                [-89.84035, 29.945964],
                                [-89.599365, 29.88024],
                                [-89.495303, 30.039072],
                                [-89.287179, 29.88024],
                                [-89.30361, 29.754271],
                                [-89.424103, 29.699501],
                                [-89.648657, 29.748794],
                                [-89.621273, 29.655686],
                                [-89.69795, 29.513285],
                                [-89.506257, 29.387316],
                                [-89.199548, 29.348977],
                                [-89.09001, 29.2011],
                                [-89.002379, 29.179192],
                                [-89.16121, 29.009407],
                                [-89.336472, 29.042268],
                                [-89.484349, 29.217531],
                                [-89.851304, 29.310638],
                                [-89.851304, 29.480424],
                                [-90.032043, 29.425654],
                                [-90.021089, 29.283254],
                                [-90.103244, 29.151807],
                                [-90.23469, 29.129899],
                                [-90.333275, 29.277777],
                                [-90.563307, 29.283254],
                                [-90.645461, 29.129899],
                                [-90.798815, 29.086084],
                                [-90.963123, 29.179192],
                                [-91.09457, 29.190146],
                                [-91.220539, 29.436608],
                                [-91.445094, 29.546147],
                                [-91.532725, 29.529716],
                                [-91.620356, 29.73784],
                                [-91.883249, 29.710455],
                                [-91.888726, 29.836425],
                                [-92.146142, 29.715932],
                                [-92.113281, 29.622824],
                                [-92.31045, 29.535193],
                                [-92.617159, 29.579009],
                                [-92.97316, 29.715932],
                                [-93.2251, 29.776178],
                                [-93.767317, 29.726886],
                                [-93.838517, 29.688547],
                                [-93.926148, 29.787132],
                                [-93.690639, 30.143133],
                                [-93.767317, 30.334826],
                                [-93.696116, 30.438888],
                                [-93.728978, 30.575812],
                                [-93.630393, 30.679874],
                                [-93.526331, 30.93729],
                                [-93.542762, 31.15089],
                                [-93.816609, 31.556184],
                                [-93.822086, 31.775262],
                                [-94.041164, 31.994339],
                                [-94.041164, 33.018527],
                                [-93.608485, 33.018527]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "23",
                    "properties": {
                        "name": "Maine"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-70.703921, 43.057759],
                                [-70.824413, 43.128959],
                                [-70.807983, 43.227544],
                                [-70.966814, 43.34256],
                                [-71.032537, 44.657025],
                                [-71.08183, 45.303304],
                                [-70.649151, 45.440228],
                                [-70.720352, 45.511428],
                                [-70.556043, 45.664782],
                                [-70.386258, 45.735983],
                                [-70.41912, 45.796229],
                                [-70.260289, 45.889337],
                                [-70.309581, 46.064599],
                                [-70.210996, 46.327492],
                                [-70.057642, 46.415123],
                                [-69.997395, 46.694447],
                                [-69.225147, 47.461219],
                                [-69.044408, 47.428357],
                                [-69.033454, 47.242141],
                                [-68.902007, 47.176418],
                                [-68.578868, 47.285957],
                                [-68.376221, 47.285957],
                                [-68.233821, 47.357157],
                                [-67.954497, 47.198326],
                                [-67.790188, 47.066879],
                                [-67.779235, 45.944106],
                                [-67.801142, 45.675736],
                                [-67.456095, 45.604536],
                                [-67.505388, 45.48952],
                                [-67.417757, 45.379982],
                                [-67.488957, 45.281397],
                                [-67.346556, 45.128042],
                                [-67.16034, 45.160904],
                                [-66.979601, 44.804903],
                                [-67.187725, 44.646072],
                                [-67.308218, 44.706318],
                                [-67.406803, 44.596779],
                                [-67.549203, 44.624164],
                                [-67.565634, 44.531056],
                                [-67.75185, 44.54201],
                                [-68.047605, 44.328409],
                                [-68.118805, 44.476286],
                                [-68.222867, 44.48724],
                                [-68.173574, 44.328409],
                                [-68.403606, 44.251732],
                                [-68.458375, 44.377701],
                                [-68.567914, 44.311978],
                                [-68.82533, 44.311978],
                                [-68.830807, 44.459856],
                                [-68.984161, 44.426994],
                                [-68.956777, 44.322932],
                                [-69.099177, 44.103854],
                                [-69.071793, 44.043608],
                                [-69.258008, 43.923115],
                                [-69.444224, 43.966931],
                                [-69.553763, 43.840961],
                                [-69.707118, 43.82453],
                                [-69.833087, 43.720469],
                                [-69.986442, 43.742376],
                                [-70.030257, 43.851915],
                                [-70.254812, 43.676653],
                                [-70.194565, 43.567114],
                                [-70.358873, 43.528776],
                                [-70.369827, 43.435668],
                                [-70.556043, 43.320652],
                                [-70.703921, 43.057759]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "24",
                    "properties": {
                        "name": "Maryland"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-75.994645, 37.95325],
                                    [-76.016553, 37.95325],
                                    [-76.043938, 37.95325],
                                    [-75.994645, 37.95325]
                                ]
                            ],
                            [
                                [
                                    [-79.477979, 39.722302],
                                    [-75.786521, 39.722302],
                                    [-75.693413, 38.462606],
                                    [-75.047134, 38.451652],
                                    [-75.244304, 38.029928],
                                    [-75.397659, 38.013497],
                                    [-75.671506, 37.95325],
                                    [-75.885106, 37.909435],
                                    [-75.879629, 38.073743],
                                    [-75.961783, 38.139466],
                                    [-75.846768, 38.210667],
                                    [-76.000122, 38.374975],
                                    [-76.049415, 38.303775],
                                    [-76.257538, 38.320205],
                                    [-76.328738, 38.500944],
                                    [-76.263015, 38.500944],
                                    [-76.257538, 38.736453],
                                    [-76.191815, 38.829561],
                                    [-76.279446, 39.147223],
                                    [-76.169907, 39.333439],
                                    [-76.000122, 39.366301],
                                    [-75.972737, 39.557994],
                                    [-76.098707, 39.536086],
                                    [-76.104184, 39.437501],
                                    [-76.367077, 39.311532],
                                    [-76.443754, 39.196516],
                                    [-76.460185, 38.906238],
                                    [-76.55877, 38.769315],
                                    [-76.514954, 38.539283],
                                    [-76.383508, 38.380452],
                                    [-76.399939, 38.259959],
                                    [-76.317785, 38.139466],
                                    [-76.3616, 38.057312],
                                    [-76.591632, 38.216144],
                                    [-76.920248, 38.292821],
                                    [-77.018833, 38.446175],
                                    [-77.205049, 38.358544],
                                    [-77.276249, 38.479037],
                                    [-77.128372, 38.632391],
                                    [-77.040741, 38.791222],
                                    [-76.909294, 38.895284],
                                    [-77.035264, 38.993869],
                                    [-77.117418, 38.933623],
                                    [-77.248864, 39.026731],
                                    [-77.456988, 39.076023],
                                    [-77.456988, 39.223901],
                                    [-77.566527, 39.306055],
                                    [-77.719881, 39.322485],
                                    [-77.834897, 39.601809],
                                    [-78.004682, 39.601809],
                                    [-78.174467, 39.694917],
                                    [-78.267575, 39.61824],
                                    [-78.431884, 39.623717],
                                    [-78.470222, 39.514178],
                                    [-78.765977, 39.585379],
                                    [-78.963147, 39.437501],
                                    [-79.094593, 39.470363],
                                    [-79.291763, 39.300578],
                                    [-79.488933, 39.20747],
                                    [-79.477979, 39.722302]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "25",
                    "properties": {
                        "name": "Massachusetts"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-70.917521, 42.887974],
                                [-70.818936, 42.871543],
                                [-70.780598, 42.696281],
                                [-70.824413, 42.55388],
                                [-70.983245, 42.422434],
                                [-70.988722, 42.269079],
                                [-70.769644, 42.247172],
                                [-70.638197, 42.08834],
                                [-70.660105, 41.962371],
                                [-70.550566, 41.929509],
                                [-70.539613, 41.814493],
                                [-70.260289, 41.715908],
                                [-69.937149, 41.809016],
                                [-70.008349, 41.672093],
                                [-70.484843, 41.5516],
                                [-70.660105, 41.546123],
                                [-70.764167, 41.639231],
                                [-70.928475, 41.611847],
                                [-70.933952, 41.540646],
                                [-71.120168, 41.496831],
                                [-71.196845, 41.67757],
                                [-71.22423, 41.710431],
                                [-71.328292, 41.781632],
                                [-71.383061, 42.01714],
                                [-71.530939, 42.01714],
                                [-71.799309, 42.006186],
                                [-71.799309, 42.022617],
                                [-73.053528, 42.039048],
                                [-73.486206, 42.050002],
                                [-73.508114, 42.08834],
                                [-73.267129, 42.745573],
                                [-72.456542, 42.729142],
                                [-71.29543, 42.696281],
                                [-71.185891, 42.789389],
                                [-70.917521, 42.887974]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "26",
                    "properties": {
                        "name": "Michigan"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-83.454238, 41.732339],
                                    [-84.807042, 41.694001],
                                    [-84.807042, 41.759724],
                                    [-85.990061, 41.759724],
                                    [-86.822556, 41.759724],
                                    [-86.619909, 41.891171],
                                    [-86.482986, 42.115725],
                                    [-86.357016, 42.252649],
                                    [-86.263908, 42.444341],
                                    [-86.209139, 42.718189],
                                    [-86.231047, 43.013943],
                                    [-86.526801, 43.594499],
                                    [-86.433693, 43.813577],
                                    [-86.499417, 44.07647],
                                    [-86.269385, 44.34484],
                                    [-86.220093, 44.569394],
                                    [-86.252954, 44.689887],
                                    [-86.088646, 44.73918],
                                    [-86.066738, 44.903488],
                                    [-85.809322, 44.947303],
                                    [-85.612152, 45.128042],
                                    [-85.628583, 44.766564],
                                    [-85.524521, 44.750133],
                                    [-85.393075, 44.930872],
                                    [-85.387598, 45.237581],
                                    [-85.305444, 45.314258],
                                    [-85.031597, 45.363551],
                                    [-85.119228, 45.577151],
                                    [-84.938489, 45.75789],
                                    [-84.713934, 45.768844],
                                    [-84.461995, 45.653829],
                                    [-84.215533, 45.637398],
                                    [-84.09504, 45.494997],
                                    [-83.908824, 45.484043],
                                    [-83.596638, 45.352597],
                                    [-83.4871, 45.358074],
                                    [-83.317314, 45.144473],
                                    [-83.454238, 45.029457],
                                    [-83.322791, 44.88158],
                                    [-83.273499, 44.711795],
                                    [-83.333745, 44.339363],
                                    [-83.536392, 44.246255],
                                    [-83.585684, 44.054562],
                                    [-83.82667, 43.988839],
                                    [-83.958116, 43.758807],
                                    [-83.908824, 43.671176],
                                    [-83.667839, 43.589022],
                                    [-83.481623, 43.714992],
                                    [-83.262545, 43.972408],
                                    [-82.917498, 44.070993],
                                    [-82.747713, 43.994316],
                                    [-82.643651, 43.851915],
                                    [-82.539589, 43.435668],
                                    [-82.523158, 43.227544],
                                    [-82.413619, 42.975605],
                                    [-82.517681, 42.614127],
                                    [-82.681989, 42.559357],
                                    [-82.687466, 42.690804],
                                    [-82.797005, 42.652465],
                                    [-82.922975, 42.351234],
                                    [-83.125621, 42.236218],
                                    [-83.185868, 42.006186],
                                    [-83.437807, 41.814493],
                                    [-83.454238, 41.732339]
                                ]
                            ],
                            [
                                [
                                    [-85.508091, 45.730506],
                                    [-85.49166, 45.610013],
                                    [-85.623106, 45.588105],
                                    [-85.568337, 45.75789],
                                    [-85.508091, 45.730506]
                                ]
                            ],
                            [
                                [
                                    [-87.589328, 45.095181],
                                    [-87.742682, 45.199243],
                                    [-87.649574, 45.341643],
                                    [-87.885083, 45.363551],
                                    [-87.791975, 45.500474],
                                    [-87.781021, 45.675736],
                                    [-87.989145, 45.796229],
                                    [-88.10416, 45.922199],
                                    [-88.531362, 46.020784],
                                    [-88.662808, 45.987922],
                                    [-89.09001, 46.135799],
                                    [-90.119674, 46.338446],
                                    [-90.229213, 46.508231],
                                    [-90.415429, 46.568478],
                                    [-90.026566, 46.672539],
                                    [-89.851304, 46.793032],
                                    [-89.413149, 46.842325],
                                    [-89.128348, 46.990202],
                                    [-88.996902, 46.995679],
                                    [-88.887363, 47.099741],
                                    [-88.575177, 47.247618],
                                    [-88.416346, 47.373588],
                                    [-88.180837, 47.455742],
                                    [-87.956283, 47.384542],
                                    [-88.350623, 47.077833],
                                    [-88.443731, 46.973771],
                                    [-88.438254, 46.787555],
                                    [-88.246561, 46.929956],
                                    [-87.901513, 46.908048],
                                    [-87.633143, 46.809463],
                                    [-87.392158, 46.535616],
                                    [-87.260711, 46.486323],
                                    [-87.008772, 46.530139],
                                    [-86.948526, 46.469893],
                                    [-86.696587, 46.437031],
                                    [-86.159846, 46.667063],
                                    [-85.880522, 46.68897],
                                    [-85.508091, 46.678016],
                                    [-85.256151, 46.754694],
                                    [-85.064458, 46.760171],
                                    [-85.02612, 46.480847],
                                    [-84.82895, 46.442508],
                                    [-84.63178, 46.486323],
                                    [-84.549626, 46.4206],
                                    [-84.418179, 46.502754],
                                    [-84.127902, 46.530139],
                                    [-84.122425, 46.179615],
                                    [-83.990978, 46.031737],
                                    [-83.793808, 45.993399],
                                    [-83.7719, 46.091984],
                                    [-83.580208, 46.091984],
                                    [-83.476146, 45.987922],
                                    [-83.563777, 45.911245],
                                    [-84.111471, 45.976968],
                                    [-84.374364, 45.933153],
                                    [-84.659165, 46.053645],
                                    [-84.741319, 45.944106],
                                    [-84.70298, 45.850998],
                                    [-84.82895, 45.872906],
                                    [-85.015166, 46.00983],
                                    [-85.338305, 46.091984],
                                    [-85.502614, 46.097461],
                                    [-85.661445, 45.966014],
                                    [-85.924338, 45.933153],
                                    [-86.209139, 45.960537],
                                    [-86.324155, 45.905768],
                                    [-86.351539, 45.796229],
                                    [-86.663725, 45.703121],
                                    [-86.647294, 45.834568],
                                    [-86.784218, 45.861952],
                                    [-86.838987, 45.725029],
                                    [-87.069019, 45.719552],
                                    [-87.17308, 45.659305],
                                    [-87.326435, 45.423797],
                                    [-87.611236, 45.122565],
                                    [-87.589328, 45.095181]
                                ]
                            ],
                            [
                                [
                                    [-88.805209, 47.976051],
                                    [-89.057148, 47.850082],
                                    [-89.188594, 47.833651],
                                    [-89.177641, 47.937713],
                                    [-88.547792, 48.173221],
                                    [-88.668285, 48.008913],
                                    [-88.805209, 47.976051]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "27",
                    "properties": {
                        "name": "Minnesota"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-92.014696, 46.705401],
                                [-92.091373, 46.749217],
                                [-92.29402, 46.667063],
                                [-92.29402, 46.075553],
                                [-92.354266, 46.015307],
                                [-92.639067, 45.933153],
                                [-92.869098, 45.719552],
                                [-92.885529, 45.577151],
                                [-92.770513, 45.566198],
                                [-92.644544, 45.440228],
                                [-92.75956, 45.286874],
                                [-92.737652, 45.117088],
                                [-92.808852, 44.750133],
                                [-92.545959, 44.569394],
                                [-92.337835, 44.552964],
                                [-92.233773, 44.443425],
                                [-91.927065, 44.333886],
                                [-91.877772, 44.202439],
                                [-91.592971, 44.032654],
                                [-91.43414, 43.994316],
                                [-91.242447, 43.775238],
                                [-91.269832, 43.616407],
                                [-91.215062, 43.501391],
                                [-91.368417, 43.501391],
                                [-96.451017, 43.501391],
                                [-96.451017, 45.297827],
                                [-96.681049, 45.412843],
                                [-96.856311, 45.604536],
                                [-96.582464, 45.818137],
                                [-96.560556, 45.933153],
                                [-96.598895, 46.332969],
                                [-96.719387, 46.437031],
                                [-96.801542, 46.656109],
                                [-96.785111, 46.924479],
                                [-96.823449, 46.968294],
                                [-96.856311, 47.609096],
                                [-97.053481, 47.948667],
                                [-97.130158, 48.140359],
                                [-97.16302, 48.545653],
                                [-97.097296, 48.682577],
                                [-97.228743, 49.000239],
                                [-95.152983, 49.000239],
                                [-95.152983, 49.383625],
                                [-94.955813, 49.372671],
                                [-94.824366, 49.295994],
                                [-94.69292, 48.775685],
                                [-94.588858, 48.715438],
                                [-94.260241, 48.699007],
                                [-94.221903, 48.649715],
                                [-93.838517, 48.627807],
                                [-93.794701, 48.518268],
                                [-93.466085, 48.545653],
                                [-93.466085, 48.589469],
                                [-93.208669, 48.644238],
                                [-92.984114, 48.62233],
                                [-92.726698, 48.540176],
                                [-92.655498, 48.436114],
                                [-92.50762, 48.447068],
                                [-92.370697, 48.222514],
                                [-92.304974, 48.315622],
                                [-92.053034, 48.359437],
                                [-92.009219, 48.266329],
                                [-91.713464, 48.200606],
                                [-91.713464, 48.112975],
                                [-91.565587, 48.041775],
                                [-91.264355, 48.080113],
                                [-91.083616, 48.178698],
                                [-90.837154, 48.238944],
                                [-90.749522, 48.091067],
                                [-90.579737, 48.123929],
                                [-90.377091, 48.091067],
                                [-90.141582, 48.112975],
                                [-89.873212, 47.987005],
                                [-89.615796, 48.008913],
                                [-89.637704, 47.954144],
                                [-89.971797, 47.828174],
                                [-90.437337, 47.729589],
                                [-90.738569, 47.625527],
                                [-91.171247, 47.368111],
                                [-91.357463, 47.20928],
                                [-91.642264, 47.028541],
                                [-92.091373, 46.787555],
                                [-92.014696, 46.705401]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "28",
                    "properties": {
                        "name": "Mississippi"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-88.471115, 34.995703],
                                [-88.202745, 34.995703],
                                [-88.098683, 34.891641],
                                [-88.241084, 33.796253],
                                [-88.471115, 31.895754],
                                [-88.394438, 30.367688],
                                [-88.503977, 30.323872],
                                [-88.744962, 30.34578],
                                [-88.843547, 30.411504],
                                [-89.084533, 30.367688],
                                [-89.418626, 30.252672],
                                [-89.522688, 30.181472],
                                [-89.643181, 30.285534],
                                [-89.681519, 30.449842],
                                [-89.845827, 30.66892],
                                [-89.747242, 30.997536],
                                [-91.636787, 30.997536],
                                [-91.565587, 31.068736],
                                [-91.636787, 31.265906],
                                [-91.516294, 31.27686],
                                [-91.499863, 31.643815],
                                [-91.401278, 31.621907],
                                [-91.341032, 31.846462],
                                [-91.105524, 31.988862],
                                [-90.985031, 32.218894],
                                [-91.006939, 32.514649],
                                [-91.154816, 32.640618],
                                [-91.143862, 32.843265],
                                [-91.072662, 32.887081],
                                [-91.16577, 33.002096],
                                [-91.089093, 33.13902],
                                [-91.143862, 33.347144],
                                [-91.056231, 33.429298],
                                [-91.231493, 33.560744],
                                [-91.072662, 33.867453],
                                [-90.891923, 34.026284],
                                [-90.952169, 34.135823],
                                [-90.744046, 34.300131],
                                [-90.749522, 34.365854],
                                [-90.568783, 34.420624],
                                [-90.585214, 34.617794],
                                [-90.481152, 34.661609],
                                [-90.409952, 34.831394],
                                [-90.251121, 34.908072],
                                [-90.311367, 34.995703],
                                [-88.471115, 34.995703]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "29",
                    "properties": {
                        "name": "Missouri"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-91.833957, 40.609566],
                                [-91.729895, 40.615043],
                                [-91.527248, 40.412397],
                                [-91.417709, 40.379535],
                                [-91.50534, 40.237135],
                                [-91.494386, 40.034488],
                                [-91.368417, 39.727779],
                                [-91.061708, 39.470363],
                                [-90.727615, 39.256762],
                                [-90.661891, 38.928146],
                                [-90.585214, 38.867899],
                                [-90.470199, 38.961007],
                                [-90.251121, 38.917192],
                                [-90.10872, 38.845992],
                                [-90.207305, 38.725499],
                                [-90.179921, 38.632391],
                                [-90.349706, 38.374975],
                                [-90.355183, 38.216144],
                                [-90.059428, 38.013497],
                                [-89.949889, 37.88205],
                                [-89.84035, 37.903958],
                                [-89.517211, 37.690357],
                                [-89.517211, 37.537003],
                                [-89.435057, 37.34531],
                                [-89.517211, 37.279587],
                                [-89.292656, 36.994786],
                                [-89.133825, 36.983832],
                                [-89.215979, 36.578538],
                                [-89.363857, 36.622354],
                                [-89.418626, 36.496384],
                                [-89.484349, 36.496384],
                                [-89.539119, 36.496384],
                                [-89.533642, 36.249922],
                                [-89.730812, 35.997983],
                                [-90.377091, 35.997983],
                                [-90.218259, 36.184199],
                                [-90.064905, 36.304691],
                                [-90.152536, 36.496384],
                                [-94.473842, 36.501861],
                                [-94.616242, 36.501861],
                                [-94.616242, 37.000263],
                                [-94.610765, 39.158177],
                                [-94.824366, 39.20747],
                                [-94.983197, 39.442978],
                                [-95.109167, 39.541563],
                                [-94.884612, 39.831841],
                                [-95.207752, 39.908518],
                                [-95.306337, 40.001626],
                                [-95.552799, 40.264519],
                                [-95.7664, 40.587659],
                                [-94.632673, 40.571228],
                                [-93.257961, 40.582182],
                                [-91.833957, 40.609566]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "30",
                    "properties": {
                        "name": "Montana"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-104.047534, 49.000239],
                                [-104.042057, 47.861036],
                                [-104.047534, 45.944106],
                                [-104.042057, 44.996596],
                                [-104.058488, 44.996596],
                                [-105.91517, 45.002073],
                                [-109.080842, 45.002073],
                                [-111.05254, 45.002073],
                                [-111.047063, 44.476286],
                                [-111.227803, 44.580348],
                                [-111.386634, 44.75561],
                                [-111.616665, 44.547487],
                                [-111.819312, 44.509148],
                                [-111.868605, 44.563917],
                                [-112.104113, 44.520102],
                                [-112.241036, 44.569394],
                                [-112.471068, 44.481763],
                                [-112.783254, 44.48724],
                                [-112.887315, 44.394132],
                                [-113.002331, 44.448902],
                                [-113.133778, 44.772041],
                                [-113.341901, 44.782995],
                                [-113.456917, 44.865149],
                                [-113.45144, 45.056842],
                                [-113.571933, 45.128042],
                                [-113.736241, 45.330689],
                                [-113.834826, 45.522382],
                                [-113.807441, 45.604536],
                                [-113.98818, 45.703121],
                                [-114.086765, 45.593582],
                                [-114.333228, 45.456659],
                                [-114.546828, 45.560721],
                                [-114.497536, 45.670259],
                                [-114.568736, 45.774321],
                                [-114.387997, 45.88386],
                                [-114.492059, 46.037214],
                                [-114.464674, 46.272723],
                                [-114.322274, 46.645155],
                                [-114.612552, 46.639678],
                                [-114.623506, 46.705401],
                                [-114.886399, 46.809463],
                                [-114.930214, 46.919002],
                                [-115.302646, 47.187372],
                                [-115.324554, 47.258572],
                                [-115.527201, 47.302388],
                                [-115.718894, 47.42288],
                                [-115.724371, 47.696727],
                                [-116.04751, 47.976051],
                                [-116.04751, 49.000239],
                                [-111.50165, 48.994762],
                                [-109.453274, 49.000239],
                                [-104.047534, 49.000239]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "31",
                    "properties": {
                        "name": "Nebraska"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-103.324578, 43.002989],
                                [-101.626726, 42.997512],
                                [-98.499393, 42.997512],
                                [-98.466531, 42.94822],
                                [-97.951699, 42.767481],
                                [-97.831206, 42.866066],
                                [-97.688806, 42.844158],
                                [-97.217789, 42.844158],
                                [-96.692003, 42.657942],
                                [-96.626279, 42.515542],
                                [-96.44554, 42.488157],
                                [-96.264801, 42.039048],
                                [-96.127878, 41.973325],
                                [-96.062155, 41.798063],
                                [-96.122401, 41.67757],
                                [-96.095016, 41.540646],
                                [-95.919754, 41.453015],
                                [-95.925231, 41.201076],
                                [-95.826646, 40.976521],
                                [-95.881416, 40.719105],
                                [-95.7664, 40.587659],
                                [-95.552799, 40.264519],
                                [-95.306337, 40.001626],
                                [-101.90605, 40.001626],
                                [-102.053927, 40.001626],
                                [-102.053927, 41.003906],
                                [-104.053011, 41.003906],
                                [-104.053011, 43.002989],
                                [-103.324578, 43.002989]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "32",
                    "properties": {
                        "name": "Nevada"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-117.027882, 42.000709],
                                [-114.04295, 41.995232],
                                [-114.048427, 37.000263],
                                [-114.048427, 36.195153],
                                [-114.152489, 36.025367],
                                [-114.251074, 36.01989],
                                [-114.371566, 36.140383],
                                [-114.738521, 36.102045],
                                [-114.678275, 35.516012],
                                [-114.596121, 35.324319],
                                [-114.574213, 35.138103],
                                [-114.634459, 35.00118],
                                [-115.85034, 35.970598],
                                [-116.540435, 36.501861],
                                [-117.498899, 37.21934],
                                [-118.71478, 38.101128],
                                [-120.001861, 38.999346],
                                [-119.996384, 40.264519],
                                [-120.001861, 41.995232],
                                [-118.698349, 41.989755],
                                [-117.027882, 42.000709]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "33",
                    "properties": {
                        "name": "New Hampshire"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-71.08183, 45.303304],
                                [-71.032537, 44.657025],
                                [-70.966814, 43.34256],
                                [-70.807983, 43.227544],
                                [-70.824413, 43.128959],
                                [-70.703921, 43.057759],
                                [-70.818936, 42.871543],
                                [-70.917521, 42.887974],
                                [-71.185891, 42.789389],
                                [-71.29543, 42.696281],
                                [-72.456542, 42.729142],
                                [-72.544173, 42.80582],
                                [-72.533219, 42.953697],
                                [-72.445588, 43.008466],
                                [-72.456542, 43.150867],
                                [-72.379864, 43.572591],
                                [-72.204602, 43.769761],
                                [-72.116971, 43.994316],
                                [-72.02934, 44.07647],
                                [-72.034817, 44.322932],
                                [-71.700724, 44.41604],
                                [-71.536416, 44.585825],
                                [-71.629524, 44.750133],
                                [-71.4926, 44.914442],
                                [-71.503554, 45.013027],
                                [-71.361154, 45.270443],
                                [-71.131122, 45.243058],
                                [-71.08183, 45.303304]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "34",
                    "properties": {
                        "name": "New Jersey"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-74.236547, 41.14083],
                                [-73.902454, 40.998429],
                                [-74.022947, 40.708151],
                                [-74.187255, 40.642428],
                                [-74.274886, 40.489074],
                                [-74.001039, 40.412397],
                                [-73.979131, 40.297381],
                                [-74.099624, 39.760641],
                                [-74.411809, 39.360824],
                                [-74.614456, 39.245808],
                                [-74.795195, 38.993869],
                                [-74.888303, 39.158177],
                                [-75.178581, 39.240331],
                                [-75.534582, 39.459409],
                                [-75.55649, 39.607286],
                                [-75.561967, 39.629194],
                                [-75.507197, 39.683964],
                                [-75.414089, 39.804456],
                                [-75.145719, 39.88661],
                                [-75.129289, 39.963288],
                                [-74.82258, 40.127596],
                                [-74.773287, 40.215227],
                                [-75.058088, 40.417874],
                                [-75.069042, 40.543843],
                                [-75.195012, 40.576705],
                                [-75.205966, 40.691721],
                                [-75.052611, 40.866983],
                                [-75.134765, 40.971045],
                                [-74.882826, 41.179168],
                                [-74.828057, 41.288707],
                                [-74.69661, 41.359907],
                                [-74.236547, 41.14083]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "35",
                    "properties": {
                        "name": "New Mexico"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-107.421329, 37.000263],
                                [-106.868158, 36.994786],
                                [-104.337812, 36.994786],
                                [-103.001438, 37.000263],
                                [-103.001438, 36.501861],
                                [-103.039777, 36.501861],
                                [-103.045254, 34.01533],
                                [-103.067161, 33.002096],
                                [-103.067161, 31.999816],
                                [-106.616219, 31.999816],
                                [-106.643603, 31.901231],
                                [-106.528588, 31.786216],
                                [-108.210008, 31.786216],
                                [-108.210008, 31.331629],
                                [-109.04798, 31.331629],
                                [-109.042503, 37.000263],
                                [-107.421329, 37.000263]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "36",
                    "properties": {
                        "name": "New York"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-73.343806, 45.013027],
                                [-73.332852, 44.804903],
                                [-73.387622, 44.618687],
                                [-73.294514, 44.437948],
                                [-73.321898, 44.246255],
                                [-73.436914, 44.043608],
                                [-73.349283, 43.769761],
                                [-73.404052, 43.687607],
                                [-73.245221, 43.523299],
                                [-73.278083, 42.833204],
                                [-73.267129, 42.745573],
                                [-73.508114, 42.08834],
                                [-73.486206, 42.050002],
                                [-73.55193, 41.294184],
                                [-73.48073, 41.21203],
                                [-73.727192, 41.102491],
                                [-73.655992, 40.987475],
                                [-73.22879, 40.905321],
                                [-73.141159, 40.965568],
                                [-72.774204, 40.965568],
                                [-72.587988, 40.998429],
                                [-72.28128, 41.157261],
                                [-72.259372, 41.042245],
                                [-72.100541, 40.992952],
                                [-72.467496, 40.845075],
                                [-73.239744, 40.625997],
                                [-73.562884, 40.582182],
                                [-73.776484, 40.593136],
                                [-73.935316, 40.543843],
                                [-74.022947, 40.708151],
                                [-73.902454, 40.998429],
                                [-74.236547, 41.14083],
                                [-74.69661, 41.359907],
                                [-74.740426, 41.431108],
                                [-74.89378, 41.436584],
                                [-75.074519, 41.60637],
                                [-75.052611, 41.754247],
                                [-75.173104, 41.869263],
                                [-75.249781, 41.863786],
                                [-75.35932, 42.000709],
                                [-79.76278, 42.000709],
                                [-79.76278, 42.252649],
                                [-79.76278, 42.269079],
                                [-79.149363, 42.55388],
                                [-79.050778, 42.690804],
                                [-78.853608, 42.783912],
                                [-78.930285, 42.953697],
                                [-79.012439, 42.986559],
                                [-79.072686, 43.260406],
                                [-78.486653, 43.375421],
                                [-77.966344, 43.369944],
                                [-77.75822, 43.34256],
                                [-77.533665, 43.233021],
                                [-77.391265, 43.276836],
                                [-76.958587, 43.271359],
                                [-76.695693, 43.34256],
                                [-76.41637, 43.523299],
                                [-76.235631, 43.528776],
                                [-76.230154, 43.802623],
                                [-76.137046, 43.961454],
                                [-76.3616, 44.070993],
                                [-76.312308, 44.196962],
                                [-75.912491, 44.366748],
                                [-75.764614, 44.514625],
                                [-75.282643, 44.848718],
                                [-74.828057, 45.018503],
                                [-74.148916, 44.991119],
                                [-73.343806, 45.013027]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "37",
                    "properties": {
                        "name": "North Carolina"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-80.978661, 36.562108],
                                [-80.294043, 36.545677],
                                [-79.510841, 36.5402],
                                [-75.868676, 36.551154],
                                [-75.75366, 36.151337],
                                [-76.032984, 36.189676],
                                [-76.071322, 36.140383],
                                [-76.410893, 36.080137],
                                [-76.460185, 36.025367],
                                [-76.68474, 36.008937],
                                [-76.673786, 35.937736],
                                [-76.399939, 35.987029],
                                [-76.3616, 35.943213],
                                [-76.060368, 35.992506],
                                [-75.961783, 35.899398],
                                [-75.781044, 35.937736],
                                [-75.715321, 35.696751],
                                [-75.775568, 35.581735],
                                [-75.89606, 35.570781],
                                [-76.147999, 35.324319],
                                [-76.482093, 35.313365],
                                [-76.536862, 35.14358],
                                [-76.394462, 34.973795],
                                [-76.279446, 34.940933],
                                [-76.493047, 34.661609],
                                [-76.673786, 34.694471],
                                [-76.991448, 34.667086],
                                [-77.210526, 34.60684],
                                [-77.555573, 34.415147],
                                [-77.82942, 34.163208],
                                [-77.971821, 33.845545],
                                [-78.179944, 33.916745],
                                [-78.541422, 33.851022],
                                [-79.675149, 34.80401],
                                [-80.797922, 34.820441],
                                [-80.781491, 34.935456],
                                [-80.934845, 35.105241],
                                [-81.038907, 35.044995],
                                [-81.044384, 35.149057],
                                [-82.276696, 35.198349],
                                [-82.550543, 35.160011],
                                [-82.764143, 35.066903],
                                [-83.109191, 35.00118],
                                [-83.618546, 34.984749],
                                [-84.319594, 34.990226],
                                [-84.29221, 35.225734],
                                [-84.09504, 35.247642],
                                [-84.018363, 35.41195],
                                [-83.7719, 35.559827],
                                [-83.498053, 35.565304],
                                [-83.251591, 35.718659],
                                [-82.994175, 35.773428],
                                [-82.775097, 35.997983],
                                [-82.638174, 36.063706],
                                [-82.610789, 35.965121],
                                [-82.216449, 36.156814],
                                [-82.03571, 36.118475],
                                [-81.909741, 36.304691],
                                [-81.723525, 36.353984],
                                [-81.679709, 36.589492],
                                [-80.978661, 36.562108]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "38",
                    "properties": {
                        "name": "North Dakota"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-97.228743, 49.000239],
                                [-97.097296, 48.682577],
                                [-97.16302, 48.545653],
                                [-97.130158, 48.140359],
                                [-97.053481, 47.948667],
                                [-96.856311, 47.609096],
                                [-96.823449, 46.968294],
                                [-96.785111, 46.924479],
                                [-96.801542, 46.656109],
                                [-96.719387, 46.437031],
                                [-96.598895, 46.332969],
                                [-96.560556, 45.933153],
                                [-104.047534, 45.944106],
                                [-104.042057, 47.861036],
                                [-104.047534, 49.000239],
                                [-97.228743, 49.000239]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "39",
                    "properties": {
                        "name": "Ohio"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-80.518598, 41.978802],
                                [-80.518598, 40.636951],
                                [-80.666475, 40.582182],
                                [-80.595275, 40.472643],
                                [-80.600752, 40.319289],
                                [-80.737675, 40.078303],
                                [-80.830783, 39.711348],
                                [-81.219646, 39.388209],
                                [-81.345616, 39.344393],
                                [-81.455155, 39.410117],
                                [-81.57017, 39.267716],
                                [-81.685186, 39.273193],
                                [-81.811156, 39.0815],
                                [-81.783771, 38.966484],
                                [-81.887833, 38.873376],
                                [-82.03571, 39.026731],
                                [-82.221926, 38.785745],
                                [-82.172634, 38.632391],
                                [-82.293127, 38.577622],
                                [-82.331465, 38.446175],
                                [-82.594358, 38.424267],
                                [-82.731282, 38.561191],
                                [-82.846298, 38.588575],
                                [-82.890113, 38.758361],
                                [-83.032514, 38.725499],
                                [-83.142052, 38.626914],
                                [-83.519961, 38.703591],
                                [-83.678792, 38.632391],
                                [-83.903347, 38.769315],
                                [-84.215533, 38.807653],
                                [-84.231963, 38.895284],
                                [-84.43461, 39.103408],
                                [-84.817996, 39.103408],
                                [-84.801565, 40.500028],
                                [-84.807042, 41.694001],
                                [-83.454238, 41.732339],
                                [-83.065375, 41.595416],
                                [-82.933929, 41.513262],
                                [-82.835344, 41.589939],
                                [-82.616266, 41.431108],
                                [-82.479343, 41.381815],
                                [-82.013803, 41.513262],
                                [-81.739956, 41.485877],
                                [-81.444201, 41.672093],
                                [-81.011523, 41.852832],
                                [-80.518598, 41.978802],
                                [-80.518598, 41.978802]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "40",
                    "properties": {
                        "name": "Oklahoma"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-100.087706, 37.000263],
                                [-94.616242, 37.000263],
                                [-94.616242, 36.501861],
                                [-94.430026, 35.395519],
                                [-94.484796, 33.637421],
                                [-94.868182, 33.74696],
                                [-94.966767, 33.861976],
                                [-95.224183, 33.960561],
                                [-95.289906, 33.87293],
                                [-95.547322, 33.878407],
                                [-95.602092, 33.933176],
                                [-95.8376, 33.834591],
                                [-95.936185, 33.889361],
                                [-96.149786, 33.840068],
                                [-96.346956, 33.686714],
                                [-96.423633, 33.774345],
                                [-96.631756, 33.845545],
                                [-96.850834, 33.845545],
                                [-96.922034, 33.960561],
                                [-97.173974, 33.736006],
                                [-97.256128, 33.861976],
                                [-97.371143, 33.823637],
                                [-97.458774, 33.905791],
                                [-97.694283, 33.982469],
                                [-97.869545, 33.851022],
                                [-97.946222, 33.987946],
                                [-98.088623, 34.004376],
                                [-98.170777, 34.113915],
                                [-98.36247, 34.157731],
                                [-98.488439, 34.064623],
                                [-98.570593, 34.146777],
                                [-98.767763, 34.135823],
                                [-98.986841, 34.223454],
                                [-99.189488, 34.2125],
                                [-99.260688, 34.404193],
                                [-99.57835, 34.415147],
                                [-99.698843, 34.382285],
                                [-99.923398, 34.573978],
                                [-100.000075, 34.563024],
                                [-100.000075, 36.501861],
                                [-101.812942, 36.501861],
                                [-103.001438, 36.501861],
                                [-103.001438, 37.000263],
                                [-102.042974, 36.994786],
                                [-100.087706, 37.000263]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "41",
                    "properties": {
                        "name": "Oregon"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-123.211348, 46.174138],
                                [-123.11824, 46.185092],
                                [-122.904639, 46.08103],
                                [-122.811531, 45.960537],
                                [-122.762239, 45.659305],
                                [-122.247407, 45.549767],
                                [-121.809251, 45.708598],
                                [-121.535404, 45.725029],
                                [-121.217742, 45.670259],
                                [-121.18488, 45.604536],
                                [-120.637186, 45.746937],
                                [-120.505739, 45.697644],
                                [-120.209985, 45.725029],
                                [-119.963522, 45.823614],
                                [-119.525367, 45.911245],
                                [-119.125551, 45.933153],
                                [-118.988627, 45.998876],
                                [-116.918344, 45.993399],
                                [-116.78142, 45.823614],
                                [-116.545912, 45.752413],
                                [-116.463758, 45.61549],
                                [-116.671881, 45.319735],
                                [-116.732128, 45.144473],
                                [-116.847143, 45.02398],
                                [-116.830713, 44.930872],
                                [-116.934774, 44.782995],
                                [-117.038836, 44.750133],
                                [-117.241483, 44.394132],
                                [-117.170283, 44.257209],
                                [-116.97859, 44.240778],
                                [-116.896436, 44.158624],
                                [-117.027882, 43.830007],
                                [-117.027882, 42.000709],
                                [-118.698349, 41.989755],
                                [-120.001861, 41.995232],
                                [-121.037003, 41.995232],
                                [-122.378853, 42.011663],
                                [-123.233256, 42.006186],
                                [-124.213628, 42.000709],
                                [-124.356029, 42.115725],
                                [-124.432706, 42.438865],
                                [-124.416275, 42.663419],
                                [-124.553198, 42.838681],
                                [-124.454613, 43.002989],
                                [-124.383413, 43.271359],
                                [-124.235536, 43.55616],
                                [-124.169813, 43.8081],
                                [-124.060274, 44.657025],
                                [-124.076705, 44.772041],
                                [-123.97812, 45.144473],
                                [-123.939781, 45.659305],
                                [-123.994551, 45.944106],
                                [-123.945258, 46.113892],
                                [-123.545441, 46.261769],
                                [-123.370179, 46.146753],
                                [-123.211348, 46.174138]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "42",
                    "properties": {
                        "name": "Pennsylvania"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-79.76278, 42.252649],
                                [-79.76278, 42.000709],
                                [-75.35932, 42.000709],
                                [-75.249781, 41.863786],
                                [-75.173104, 41.869263],
                                [-75.052611, 41.754247],
                                [-75.074519, 41.60637],
                                [-74.89378, 41.436584],
                                [-74.740426, 41.431108],
                                [-74.69661, 41.359907],
                                [-74.828057, 41.288707],
                                [-74.882826, 41.179168],
                                [-75.134765, 40.971045],
                                [-75.052611, 40.866983],
                                [-75.205966, 40.691721],
                                [-75.195012, 40.576705],
                                [-75.069042, 40.543843],
                                [-75.058088, 40.417874],
                                [-74.773287, 40.215227],
                                [-74.82258, 40.127596],
                                [-75.129289, 39.963288],
                                [-75.145719, 39.88661],
                                [-75.414089, 39.804456],
                                [-75.616736, 39.831841],
                                [-75.786521, 39.722302],
                                [-79.477979, 39.722302],
                                [-80.518598, 39.722302],
                                [-80.518598, 40.636951],
                                [-80.518598, 41.978802],
                                [-80.518598, 41.978802],
                                [-80.332382, 42.033571],
                                [-79.76278, 42.269079],
                                [-79.76278, 42.252649]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "44",
                    "properties": {
                        "name": "Rhode Island"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-71.196845, 41.67757],
                                    [-71.120168, 41.496831],
                                    [-71.317338, 41.474923],
                                    [-71.196845, 41.67757]
                                ]
                            ],
                            [
                                [
                                    [-71.530939, 42.01714],
                                    [-71.383061, 42.01714],
                                    [-71.328292, 41.781632],
                                    [-71.22423, 41.710431],
                                    [-71.344723, 41.726862],
                                    [-71.448785, 41.578985],
                                    [-71.481646, 41.370861],
                                    [-71.859555, 41.321569],
                                    [-71.799309, 41.414677],
                                    [-71.799309, 42.006186],
                                    [-71.530939, 42.01714]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "45",
                    "properties": {
                        "name": "South Carolina"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-82.764143, 35.066903],
                                [-82.550543, 35.160011],
                                [-82.276696, 35.198349],
                                [-81.044384, 35.149057],
                                [-81.038907, 35.044995],
                                [-80.934845, 35.105241],
                                [-80.781491, 34.935456],
                                [-80.797922, 34.820441],
                                [-79.675149, 34.80401],
                                [-78.541422, 33.851022],
                                [-78.716684, 33.80173],
                                [-78.935762, 33.637421],
                                [-79.149363, 33.380005],
                                [-79.187701, 33.171881],
                                [-79.357487, 33.007573],
                                [-79.582041, 33.007573],
                                [-79.631334, 32.887081],
                                [-79.866842, 32.755634],
                                [-79.998289, 32.613234],
                                [-80.206412, 32.552987],
                                [-80.430967, 32.399633],
                                [-80.452875, 32.328433],
                                [-80.660998, 32.246279],
                                [-80.885553, 32.032678],
                                [-81.115584, 32.120309],
                                [-81.121061, 32.290094],
                                [-81.279893, 32.558464],
                                [-81.416816, 32.629664],
                                [-81.42777, 32.843265],
                                [-81.493493, 33.007573],
                                [-81.761863, 33.160928],
                                [-81.937125, 33.347144],
                                [-81.926172, 33.462159],
                                [-82.194542, 33.631944],
                                [-82.325988, 33.81816],
                                [-82.55602, 33.94413],
                                [-82.714851, 34.152254],
                                [-82.747713, 34.26727],
                                [-82.901067, 34.486347],
                                [-83.005129, 34.469916],
                                [-83.339222, 34.683517],
                                [-83.322791, 34.787579],
                                [-83.109191, 35.00118],
                                [-82.764143, 35.066903]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "46",
                    "properties": {
                        "name": "South Dakota"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-104.047534, 45.944106],
                                [-96.560556, 45.933153],
                                [-96.582464, 45.818137],
                                [-96.856311, 45.604536],
                                [-96.681049, 45.412843],
                                [-96.451017, 45.297827],
                                [-96.451017, 43.501391],
                                [-96.582464, 43.479483],
                                [-96.527695, 43.397329],
                                [-96.560556, 43.222067],
                                [-96.434587, 43.123482],
                                [-96.511264, 43.052282],
                                [-96.544125, 42.855112],
                                [-96.631756, 42.707235],
                                [-96.44554, 42.488157],
                                [-96.626279, 42.515542],
                                [-96.692003, 42.657942],
                                [-97.217789, 42.844158],
                                [-97.688806, 42.844158],
                                [-97.831206, 42.866066],
                                [-97.951699, 42.767481],
                                [-98.466531, 42.94822],
                                [-98.499393, 42.997512],
                                [-101.626726, 42.997512],
                                [-103.324578, 43.002989],
                                [-104.053011, 43.002989],
                                [-104.058488, 44.996596],
                                [-104.042057, 44.996596],
                                [-104.047534, 45.944106]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "47",
                    "properties": {
                        "name": "Tennessee"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-88.054868, 36.496384],
                                [-88.071299, 36.677123],
                                [-87.852221, 36.633308],
                                [-86.592525, 36.655216],
                                [-85.486183, 36.616877],
                                [-85.289013, 36.627831],
                                [-84.544149, 36.594969],
                                [-83.689746, 36.584015],
                                [-83.673316, 36.600446],
                                [-81.679709, 36.589492],
                                [-81.723525, 36.353984],
                                [-81.909741, 36.304691],
                                [-82.03571, 36.118475],
                                [-82.216449, 36.156814],
                                [-82.610789, 35.965121],
                                [-82.638174, 36.063706],
                                [-82.775097, 35.997983],
                                [-82.994175, 35.773428],
                                [-83.251591, 35.718659],
                                [-83.498053, 35.565304],
                                [-83.7719, 35.559827],
                                [-84.018363, 35.41195],
                                [-84.09504, 35.247642],
                                [-84.29221, 35.225734],
                                [-84.319594, 34.990226],
                                [-85.606675, 34.984749],
                                [-87.359296, 35.00118],
                                [-88.202745, 34.995703],
                                [-88.471115, 34.995703],
                                [-90.311367, 34.995703],
                                [-90.212782, 35.023087],
                                [-90.114197, 35.198349],
                                [-90.130628, 35.439335],
                                [-89.944412, 35.603643],
                                [-89.911551, 35.756997],
                                [-89.763673, 35.811767],
                                [-89.730812, 35.997983],
                                [-89.533642, 36.249922],
                                [-89.539119, 36.496384],
                                [-89.484349, 36.496384],
                                [-89.418626, 36.496384],
                                [-89.298133, 36.507338],
                                [-88.054868, 36.496384]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "48",
                    "properties": {
                        "name": "Texas"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-101.812942, 36.501861],
                                [-100.000075, 36.501861],
                                [-100.000075, 34.563024],
                                [-99.923398, 34.573978],
                                [-99.698843, 34.382285],
                                [-99.57835, 34.415147],
                                [-99.260688, 34.404193],
                                [-99.189488, 34.2125],
                                [-98.986841, 34.223454],
                                [-98.767763, 34.135823],
                                [-98.570593, 34.146777],
                                [-98.488439, 34.064623],
                                [-98.36247, 34.157731],
                                [-98.170777, 34.113915],
                                [-98.088623, 34.004376],
                                [-97.946222, 33.987946],
                                [-97.869545, 33.851022],
                                [-97.694283, 33.982469],
                                [-97.458774, 33.905791],
                                [-97.371143, 33.823637],
                                [-97.256128, 33.861976],
                                [-97.173974, 33.736006],
                                [-96.922034, 33.960561],
                                [-96.850834, 33.845545],
                                [-96.631756, 33.845545],
                                [-96.423633, 33.774345],
                                [-96.346956, 33.686714],
                                [-96.149786, 33.840068],
                                [-95.936185, 33.889361],
                                [-95.8376, 33.834591],
                                [-95.602092, 33.933176],
                                [-95.547322, 33.878407],
                                [-95.289906, 33.87293],
                                [-95.224183, 33.960561],
                                [-94.966767, 33.861976],
                                [-94.868182, 33.74696],
                                [-94.484796, 33.637421],
                                [-94.380734, 33.544313],
                                [-94.183564, 33.593606],
                                [-94.041164, 33.54979],
                                [-94.041164, 33.018527],
                                [-94.041164, 31.994339],
                                [-93.822086, 31.775262],
                                [-93.816609, 31.556184],
                                [-93.542762, 31.15089],
                                [-93.526331, 30.93729],
                                [-93.630393, 30.679874],
                                [-93.728978, 30.575812],
                                [-93.696116, 30.438888],
                                [-93.767317, 30.334826],
                                [-93.690639, 30.143133],
                                [-93.926148, 29.787132],
                                [-93.838517, 29.688547],
                                [-94.002825, 29.68307],
                                [-94.523134, 29.546147],
                                [-94.70935, 29.622824],
                                [-94.742212, 29.787132],
                                [-94.873659, 29.672117],
                                [-94.966767, 29.699501],
                                [-95.016059, 29.557101],
                                [-94.911997, 29.496854],
                                [-94.895566, 29.310638],
                                [-95.081782, 29.113469],
                                [-95.383014, 28.867006],
                                [-95.985477, 28.604113],
                                [-96.045724, 28.647929],
                                [-96.226463, 28.582205],
                                [-96.23194, 28.642452],
                                [-96.478402, 28.598636],
                                [-96.593418, 28.724606],
                                [-96.664618, 28.697221],
                                [-96.401725, 28.439805],
                                [-96.593418, 28.357651],
                                [-96.774157, 28.406943],
                                [-96.801542, 28.226204],
                                [-97.026096, 28.039988],
                                [-97.256128, 27.694941],
                                [-97.404005, 27.333463],
                                [-97.513544, 27.360848],
                                [-97.540929, 27.229401],
                                [-97.425913, 27.262263],
                                [-97.480682, 26.99937],
                                [-97.557359, 26.988416],
                                [-97.562836, 26.840538],
                                [-97.469728, 26.758384],
                                [-97.442344, 26.457153],
                                [-97.332805, 26.353091],
                                [-97.30542, 26.161398],
                                [-97.217789, 25.991613],
                                [-97.524498, 25.887551],
                                [-97.650467, 26.018997],
                                [-97.885976, 26.06829],
                                [-98.198161, 26.057336],
                                [-98.466531, 26.221644],
                                [-98.669178, 26.238075],
                                [-98.822533, 26.369522],
                                [-99.030656, 26.413337],
                                [-99.173057, 26.539307],
                                [-99.266165, 26.840538],
                                [-99.446904, 27.021277],
                                [-99.424996, 27.174632],
                                [-99.50715, 27.33894],
                                [-99.479765, 27.48134],
                                [-99.605735, 27.640172],
                                [-99.709797, 27.656603],
                                [-99.879582, 27.799003],
                                [-99.934351, 27.979742],
                                [-100.082229, 28.14405],
                                [-100.29583, 28.280974],
                                [-100.399891, 28.582205],
                                [-100.498476, 28.66436],
                                [-100.629923, 28.905345],
                                [-100.673738, 29.102515],
                                [-100.799708, 29.244915],
                                [-101.013309, 29.370885],
                                [-101.062601, 29.458516],
                                [-101.259771, 29.535193],
                                [-101.413125, 29.754271],
                                [-101.851281, 29.803563],
                                [-102.114174, 29.792609],
                                [-102.338728, 29.869286],
                                [-102.388021, 29.765225],
                                [-102.629006, 29.732363],
                                [-102.809745, 29.524239],
                                [-102.919284, 29.190146],
                                [-102.97953, 29.184669],
                                [-103.116454, 28.987499],
                                [-103.280762, 28.982022],
                                [-103.527224, 29.135376],
                                [-104.146119, 29.381839],
                                [-104.266611, 29.513285],
                                [-104.507597, 29.639255],
                                [-104.677382, 29.924056],
                                [-104.688336, 30.181472],
                                [-104.858121, 30.389596],
                                [-104.896459, 30.570335],
                                [-105.005998, 30.685351],
                                [-105.394861, 30.855136],
                                [-105.602985, 31.085167],
                                [-105.77277, 31.167321],
                                [-105.953509, 31.364491],
                                [-106.205448, 31.468553],
                                [-106.38071, 31.731446],
                                [-106.528588, 31.786216],
                                [-106.643603, 31.901231],
                                [-106.616219, 31.999816],
                                [-103.067161, 31.999816],
                                [-103.067161, 33.002096],
                                [-103.045254, 34.01533],
                                [-103.039777, 36.501861],
                                [-103.001438, 36.501861],
                                [-101.812942, 36.501861]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "49",
                    "properties": {
                        "name": "Utah"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-112.164359, 41.995232],
                                [-111.047063, 42.000709],
                                [-111.047063, 40.998429],
                                [-109.04798, 40.998429],
                                [-109.053457, 39.125316],
                                [-109.058934, 38.27639],
                                [-109.042503, 38.166851],
                                [-109.042503, 37.000263],
                                [-110.499369, 37.00574],
                                [-114.048427, 37.000263],
                                [-114.04295, 41.995232],
                                [-112.164359, 41.995232]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "50",
                    "properties": {
                        "name": "Vermont"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-71.503554, 45.013027],
                                [-71.4926, 44.914442],
                                [-71.629524, 44.750133],
                                [-71.536416, 44.585825],
                                [-71.700724, 44.41604],
                                [-72.034817, 44.322932],
                                [-72.02934, 44.07647],
                                [-72.116971, 43.994316],
                                [-72.204602, 43.769761],
                                [-72.379864, 43.572591],
                                [-72.456542, 43.150867],
                                [-72.445588, 43.008466],
                                [-72.533219, 42.953697],
                                [-72.544173, 42.80582],
                                [-72.456542, 42.729142],
                                [-73.267129, 42.745573],
                                [-73.278083, 42.833204],
                                [-73.245221, 43.523299],
                                [-73.404052, 43.687607],
                                [-73.349283, 43.769761],
                                [-73.436914, 44.043608],
                                [-73.321898, 44.246255],
                                [-73.294514, 44.437948],
                                [-73.387622, 44.618687],
                                [-73.332852, 44.804903],
                                [-73.343806, 45.013027],
                                [-72.308664, 45.002073],
                                [-71.503554, 45.013027]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "51",
                    "properties": {
                        "name": "Virginia"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-75.397659, 38.013497],
                                    [-75.244304, 38.029928],
                                    [-75.375751, 37.860142],
                                    [-75.512674, 37.799896],
                                    [-75.594828, 37.569865],
                                    [-75.802952, 37.197433],
                                    [-75.972737, 37.120755],
                                    [-76.027507, 37.257679],
                                    [-75.939876, 37.564388],
                                    [-75.671506, 37.95325],
                                    [-75.397659, 38.013497]
                                ]
                            ],
                            [
                                [
                                    [-76.016553, 37.95325],
                                    [-75.994645, 37.95325],
                                    [-76.043938, 37.95325],
                                    [-76.016553, 37.95325]
                                ]
                            ],
                            [
                                [
                                    [-78.349729, 39.464886],
                                    [-77.82942, 39.130793],
                                    [-77.719881, 39.322485],
                                    [-77.566527, 39.306055],
                                    [-77.456988, 39.223901],
                                    [-77.456988, 39.076023],
                                    [-77.248864, 39.026731],
                                    [-77.117418, 38.933623],
                                    [-77.040741, 38.791222],
                                    [-77.128372, 38.632391],
                                    [-77.248864, 38.588575],
                                    [-77.325542, 38.446175],
                                    [-77.281726, 38.342113],
                                    [-77.013356, 38.374975],
                                    [-76.964064, 38.216144],
                                    [-76.613539, 38.15042],
                                    [-76.514954, 38.024451],
                                    [-76.235631, 37.887527],
                                    [-76.3616, 37.608203],
                                    [-76.246584, 37.389126],
                                    [-76.383508, 37.285064],
                                    [-76.399939, 37.159094],
                                    [-76.273969, 37.082417],
                                    [-76.410893, 36.961924],
                                    [-76.619016, 37.120755],
                                    [-76.668309, 37.065986],
                                    [-76.48757, 36.95097],
                                    [-75.994645, 36.923586],
                                    [-75.868676, 36.551154],
                                    [-79.510841, 36.5402],
                                    [-80.294043, 36.545677],
                                    [-80.978661, 36.562108],
                                    [-81.679709, 36.589492],
                                    [-83.673316, 36.600446],
                                    [-83.136575, 36.742847],
                                    [-83.070852, 36.852385],
                                    [-82.879159, 36.890724],
                                    [-82.868205, 36.978355],
                                    [-82.720328, 37.044078],
                                    [-82.720328, 37.120755],
                                    [-82.353373, 37.268633],
                                    [-81.969987, 37.537003],
                                    [-81.986418, 37.454849],
                                    [-81.849494, 37.285064],
                                    [-81.679709, 37.20291],
                                    [-81.55374, 37.208387],
                                    [-81.362047, 37.339833],
                                    [-81.225123, 37.235771],
                                    [-80.967707, 37.290541],
                                    [-80.513121, 37.482234],
                                    [-80.474782, 37.421987],
                                    [-80.29952, 37.509618],
                                    [-80.294043, 37.690357],
                                    [-80.184505, 37.849189],
                                    [-79.998289, 37.997066],
                                    [-79.921611, 38.177805],
                                    [-79.724442, 38.364021],
                                    [-79.647764, 38.594052],
                                    [-79.477979, 38.457129],
                                    [-79.313671, 38.413313],
                                    [-79.209609, 38.495467],
                                    [-78.996008, 38.851469],
                                    [-78.870039, 38.763838],
                                    [-78.404499, 39.169131],
                                    [-78.349729, 39.464886]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "53",
                    "properties": {
                        "name": "Washington"
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-117.033359, 49.000239],
                                    [-117.044313, 47.762451],
                                    [-117.038836, 46.426077],
                                    [-117.055267, 46.343923],
                                    [-116.92382, 46.168661],
                                    [-116.918344, 45.993399],
                                    [-118.988627, 45.998876],
                                    [-119.125551, 45.933153],
                                    [-119.525367, 45.911245],
                                    [-119.963522, 45.823614],
                                    [-120.209985, 45.725029],
                                    [-120.505739, 45.697644],
                                    [-120.637186, 45.746937],
                                    [-121.18488, 45.604536],
                                    [-121.217742, 45.670259],
                                    [-121.535404, 45.725029],
                                    [-121.809251, 45.708598],
                                    [-122.247407, 45.549767],
                                    [-122.762239, 45.659305],
                                    [-122.811531, 45.960537],
                                    [-122.904639, 46.08103],
                                    [-123.11824, 46.185092],
                                    [-123.211348, 46.174138],
                                    [-123.370179, 46.146753],
                                    [-123.545441, 46.261769],
                                    [-123.72618, 46.300108],
                                    [-123.874058, 46.239861],
                                    [-124.065751, 46.327492],
                                    [-124.027412, 46.464416],
                                    [-123.895966, 46.535616],
                                    [-124.098612, 46.74374],
                                    [-124.235536, 47.285957],
                                    [-124.31769, 47.357157],
                                    [-124.427229, 47.740543],
                                    [-124.624399, 47.88842],
                                    [-124.706553, 48.184175],
                                    [-124.597014, 48.381345],
                                    [-124.394367, 48.288237],
                                    [-123.983597, 48.162267],
                                    [-123.704273, 48.167744],
                                    [-123.424949, 48.118452],
                                    [-123.162056, 48.167744],
                                    [-123.036086, 48.080113],
                                    [-122.800578, 48.08559],
                                    [-122.636269, 47.866512],
                                    [-122.515777, 47.882943],
                                    [-122.493869, 47.587189],
                                    [-122.422669, 47.318818],
                                    [-122.324084, 47.346203],
                                    [-122.422669, 47.576235],
                                    [-122.395284, 47.800789],
                                    [-122.230976, 48.030821],
                                    [-122.362422, 48.123929],
                                    [-122.373376, 48.288237],
                                    [-122.471961, 48.468976],
                                    [-122.422669, 48.600422],
                                    [-122.488392, 48.753777],
                                    [-122.647223, 48.775685],
                                    [-122.795101, 48.8907],
                                    [-122.756762, 49.000239],
                                    [-117.033359, 49.000239]
                                ]
                            ],
                            [
                                [
                                    [-122.718423, 48.310145],
                                    [-122.586977, 48.35396],
                                    [-122.608885, 48.151313],
                                    [-122.767716, 48.227991],
                                    [-122.718423, 48.310145]
                                ]
                            ],
                            [
                                [
                                    [-123.025132, 48.583992],
                                    [-122.915593, 48.715438],
                                    [-122.767716, 48.556607],
                                    [-122.811531, 48.419683],
                                    [-123.041563, 48.458022],
                                    [-123.025132, 48.583992]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "54",
                    "properties": {
                        "name": "West Virginia"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-80.518598, 40.636951],
                                [-80.518598, 39.722302],
                                [-79.477979, 39.722302],
                                [-79.488933, 39.20747],
                                [-79.291763, 39.300578],
                                [-79.094593, 39.470363],
                                [-78.963147, 39.437501],
                                [-78.765977, 39.585379],
                                [-78.470222, 39.514178],
                                [-78.431884, 39.623717],
                                [-78.267575, 39.61824],
                                [-78.174467, 39.694917],
                                [-78.004682, 39.601809],
                                [-77.834897, 39.601809],
                                [-77.719881, 39.322485],
                                [-77.82942, 39.130793],
                                [-78.349729, 39.464886],
                                [-78.404499, 39.169131],
                                [-78.870039, 38.763838],
                                [-78.996008, 38.851469],
                                [-79.209609, 38.495467],
                                [-79.313671, 38.413313],
                                [-79.477979, 38.457129],
                                [-79.647764, 38.594052],
                                [-79.724442, 38.364021],
                                [-79.921611, 38.177805],
                                [-79.998289, 37.997066],
                                [-80.184505, 37.849189],
                                [-80.294043, 37.690357],
                                [-80.29952, 37.509618],
                                [-80.474782, 37.421987],
                                [-80.513121, 37.482234],
                                [-80.967707, 37.290541],
                                [-81.225123, 37.235771],
                                [-81.362047, 37.339833],
                                [-81.55374, 37.208387],
                                [-81.679709, 37.20291],
                                [-81.849494, 37.285064],
                                [-81.986418, 37.454849],
                                [-81.969987, 37.537003],
                                [-82.101434, 37.553434],
                                [-82.293127, 37.668449],
                                [-82.342419, 37.783465],
                                [-82.50125, 37.931343],
                                [-82.621743, 38.123036],
                                [-82.594358, 38.424267],
                                [-82.331465, 38.446175],
                                [-82.293127, 38.577622],
                                [-82.172634, 38.632391],
                                [-82.221926, 38.785745],
                                [-82.03571, 39.026731],
                                [-81.887833, 38.873376],
                                [-81.783771, 38.966484],
                                [-81.811156, 39.0815],
                                [-81.685186, 39.273193],
                                [-81.57017, 39.267716],
                                [-81.455155, 39.410117],
                                [-81.345616, 39.344393],
                                [-81.219646, 39.388209],
                                [-80.830783, 39.711348],
                                [-80.737675, 40.078303],
                                [-80.600752, 40.319289],
                                [-80.595275, 40.472643],
                                [-80.666475, 40.582182],
                                [-80.518598, 40.636951]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "55",
                    "properties": {
                        "name": "Wisconsin"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-90.415429, 46.568478],
                                [-90.229213, 46.508231],
                                [-90.119674, 46.338446],
                                [-89.09001, 46.135799],
                                [-88.662808, 45.987922],
                                [-88.531362, 46.020784],
                                [-88.10416, 45.922199],
                                [-87.989145, 45.796229],
                                [-87.781021, 45.675736],
                                [-87.791975, 45.500474],
                                [-87.885083, 45.363551],
                                [-87.649574, 45.341643],
                                [-87.742682, 45.199243],
                                [-87.589328, 45.095181],
                                [-87.627666, 44.974688],
                                [-87.819359, 44.95278],
                                [-87.983668, 44.722749],
                                [-88.043914, 44.563917],
                                [-87.928898, 44.536533],
                                [-87.775544, 44.640595],
                                [-87.611236, 44.837764],
                                [-87.403112, 44.914442],
                                [-87.238804, 45.166381],
                                [-87.03068, 45.22115],
                                [-87.047111, 45.089704],
                                [-87.189511, 44.969211],
                                [-87.468835, 44.552964],
                                [-87.545512, 44.322932],
                                [-87.540035, 44.158624],
                                [-87.644097, 44.103854],
                                [-87.737205, 43.8793],
                                [-87.704344, 43.687607],
                                [-87.791975, 43.561637],
                                [-87.912467, 43.249452],
                                [-87.885083, 43.002989],
                                [-87.76459, 42.783912],
                                [-87.802929, 42.493634],
                                [-88.788778, 42.493634],
                                [-90.639984, 42.510065],
                                [-90.711184, 42.636034],
                                [-91.067185, 42.75105],
                                [-91.143862, 42.909881],
                                [-91.176724, 43.134436],
                                [-91.056231, 43.254929],
                                [-91.204109, 43.353514],
                                [-91.215062, 43.501391],
                                [-91.269832, 43.616407],
                                [-91.242447, 43.775238],
                                [-91.43414, 43.994316],
                                [-91.592971, 44.032654],
                                [-91.877772, 44.202439],
                                [-91.927065, 44.333886],
                                [-92.233773, 44.443425],
                                [-92.337835, 44.552964],
                                [-92.545959, 44.569394],
                                [-92.808852, 44.750133],
                                [-92.737652, 45.117088],
                                [-92.75956, 45.286874],
                                [-92.644544, 45.440228],
                                [-92.770513, 45.566198],
                                [-92.885529, 45.577151],
                                [-92.869098, 45.719552],
                                [-92.639067, 45.933153],
                                [-92.354266, 46.015307],
                                [-92.29402, 46.075553],
                                [-92.29402, 46.667063],
                                [-92.091373, 46.749217],
                                [-92.014696, 46.705401],
                                [-91.790141, 46.694447],
                                [-91.09457, 46.864232],
                                [-90.837154, 46.95734],
                                [-90.749522, 46.88614],
                                [-90.886446, 46.754694],
                                [-90.55783, 46.584908],
                                [-90.415429, 46.568478]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "56",
                    "properties": {
                        "name": "Wyoming"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-109.080842, 45.002073],
                                [-105.91517, 45.002073],
                                [-104.058488, 44.996596],
                                [-104.053011, 43.002989],
                                [-104.053011, 41.003906],
                                [-105.728954, 40.998429],
                                [-107.919731, 41.003906],
                                [-109.04798, 40.998429],
                                [-111.047063, 40.998429],
                                [-111.047063, 42.000709],
                                [-111.047063, 44.476286],
                                [-111.05254, 45.002073],
                                [-109.080842, 45.002073]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "id": "72",
                    "properties": {
                        "name": "Puerto Rico"
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-66.448338, 17.984326],
                                [-66.771478, 18.006234],
                                [-66.924832, 17.929556],
                                [-66.985078, 17.973372],
                                [-67.209633, 17.956941],
                                [-67.154863, 18.19245],
                                [-67.269879, 18.362235],
                                [-67.094617, 18.515589],
                                [-66.957694, 18.488204],
                                [-66.409999, 18.488204],
                                [-65.840398, 18.433435],
                                [-65.632274, 18.367712],
                                [-65.626797, 18.203403],
                                [-65.730859, 18.186973],
                                [-65.834921, 18.017187],
                                [-66.234737, 17.929556],
                                [-66.448338, 17.984326]
                            ]
                        ]
                    }
                }
            ]
        }
        echarts.registerMap('USA', usaJson, {
            Alaska: { // 把阿拉斯加移到美国主大陆左下方
                left: -113,
                top: 20,
                width: 15
            },
            Hawaii: {
                left: -95, // 夏威夷
                top: 20,
                width: 5
            },
            'Puerto Rico': { // 波多黎各
                left: -85,
                top: 22,
                width: 2
            }
        });

// 时间轴
        var days = ['1/22/20', '1/23/20', '1/24/20', '1/25/20', '1/26/20', '1/27/20', '1/28/20', '1/29/20', '1/30/20', '1/31/20', '2/1/20', '2/2/20', '2/3/20', '2/4/20', '2/5/20', '2/6/20', '2/7/20', '2/8/20', '2/9/20', '2/10/20', '2/11/20', '2/12/20', '2/13/20', '2/14/20', '2/15/20', '2/16/20', '2/17/20', '2/18/20', '2/19/20', '2/20/20', '2/21/20', '2/22/20', '2/23/20', '2/24/20', '2/25/20', '2/26/20', '2/27/20', '2/28/20', '2/29/20', '3/1/20', '3/2/20', '3/3/20', '3/4/20', '3/5/20', '3/6/20', '3/7/20', '3/8/20', '3/9/20', '3/10/20', '3/11/20', '3/12/20', '3/13/20', '3/14/20', '3/15/20', '3/16/20', '3/17/20', '3/18/20', '3/19/20', '3/20/20', '3/21/20', '3/22/20', '3/23/20', '3/24/20', '3/25/20', '3/26/20', '3/27/20', '3/28/20', '3/29/20', '3/30/20', '3/31/20', '4/01/20', '4/02/20', '4/03/20', '4/04/20', '4/05/20', '4/06/20', '4/07/20', '4/08/20', '4/09/20', '4/10/20', '4/11/20', '4/12/20', '4/13/20', '4/14/20', '4/15/20', '4/16/20', '4/17/20', '4/18/20', '4/19/20', '4/20/20', '4/21/20', '4/22/20', '4/23/20', '4/24/20', '4/25/20', '4/26/20', '4/27/20', '4/28/20', '4/29/20', '4/30/20', '5/01/20', '5/02/20', '5/03/20', '5/04/20', '5/05/20', '5/06/20', '5/07/20', '5/08/20', '5/09/20', '5/10/20', '5/11/20', '5/12/20', '5/13/20', '5/14/20', '5/15/20', '5/16/20', '5/17/20', '5/18/20', '5/19/20', '5/20/20', '5/21/20', '5/22/20', '5/23/20', '5/24/20', '5/25/20', '5/26/20', '5/27/20', '5/28/20', '5/29/20', '5/30/20', '5/31/20', '6/01/20', '6/02/20', '6/03/20', '6/04/20', '6/05/20', '6/06/20', '6/07/20', '6/08/20', '6/09/20', '6/10/20', '6/11/20', '6/12/20', '6/13/20', '6/14/20', '6/15/20', '6/16/20', '6/17/20'];

//国家索引
        var country = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Diamond Princess', 'District of Columbia', 'Florida', 'Georgia', 'Grand Princess', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

//数据格式为[时间[国家数据]]
        var data = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 10, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 11, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 11, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 12, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 1, 0, 12, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0],
            [0, 0, 0, 1, 0, 21, 0, 0, 0, 45, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0],
            [0, 0, 0, 1, 0, 25, 0, 0, 0, 45, 0, 2, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 1, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 27, 0, 0, 0],
            [0, 0, 0, 1, 0, 35, 0, 0, 0, 45, 0, 2, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 11, 1, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0],
            [0, 0, 0, 1, 0, 51, 0, 0, 0, 45, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 23, 1, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 3, 0, 0, 0, 0, 70, 0, 0, 0
            ],
            [0, 0, 0, 2, 0, 59, 3, 0, 0, 45, 0, 3, 3, 0, 0, 0, 0, 5, 1, 0, 0, 1, 0, 0, 3, 6, 0, 1, 0, 0, 0, 1, 2, 2, 2, 0, 31, 2, 0, 0, 0, 0, 3, 2, 0, 2, 0, 0, 1, 4, 0, 0, 0, 0, 78, 0, 0, 0],
            [0, 0, 0, 4, 0, 81, 7, 0, 0, 45, 0, 7, 5, 21, 0, 1, 0, 6, 1, 0, 0, 1, 0, 0, 3, 6, 0, 1, 0, 0, 0, 1, 2, 2, 4, 0, 76, 2, 0, 0, 0, 1, 6, 2, 0, 3, 2, 0, 1, 8, 1, 0, 0, 0, 102, 0, 0, 0],
            [0, 0, 0, 4, 0, 95, 7, 0, 0, 45, 2, 10, 5, 21, 0, 1, 0, 7, 2, 0, 1, 1, 0, 0, 5, 22, 0, 1, 0, 1, 0, 1, 4, 4, 5, 0, 106, 2, 0, 0, 0, 1, 14, 6, 0, 3, 2, 0, 3, 11, 1, 1, 0, 2, 122, 0, 0, 0],
            [0, 0, 0, 4, 0, 101, 7, 0, 0, 45, 2, 13, 10, 21, 0, 1, 0, 7, 3, 3, 1, 4, 1, 0, 5, 22, 0, 2, 0, 1, 0, 3, 4, 4, 5, 0, 142, 2, 0, 0, 0, 1, 14, 7, 0, 3, 3, 0, 3, 13, 1, 1, 0, 2, 122, 0, 0, 0],
            [0, 0, 0, 6, 0, 144, 15, 2, 0, 46, 5, 15, 17, 21, 0, 2, 0, 12, 6, 8, 1, 6, 1, 0, 8, 92, 0, 3, 0, 1, 0, 3, 4, 4, 15, 0, 173, 7, 0, 0, 3, 2, 15, 12, 0, 3, 7, 0, 7, 13, 2, 1, 0, 7, 267, 0, 3, 0],
            [0, 0, 0, 9, 1, 177, 34, 3, 1, 46, 10, 28, 23, 21, 0, 2, 0, 25, 11, 13, 1, 8, 6, 0, 9, 95, 2, 5, 0, 1, 1, 5, 7, 5, 23, 3, 220, 7, 0, 0, 4, 2, 19, 16, 0, 5, 10, 8, 9, 21, 3, 1, 0, 9, 366, 0, 6, 0],
            [0, 0, 0, 9, 6, 221, 45, 5, 1, 46, 10, 35, 31, 21, 0, 2, 0, 32, 13, 16, 1, 10, 19, 0, 12, 108, 2, 9, 1, 1, 1, 10, 14, 6, 29, 5, 328, 15, 1, 0, 5, 2, 24, 22, 0, 5, 12, 8, 18, 27, 5, 2, 0, 17, 442, 0, 8, 1],
            [5, 1, 0, 9, 6, 282, 49, 11, 4, 46, 10, 50, 42, 21, 0, 2, 1, 46, 13, 17, 5, 14, 36, 1, 18, 123, 16, 14, 1, 2, 1, 13, 17, 6, 29, 10, 421, 17, 1, 0, 13, 2, 30, 41, 0, 14, 13, 8, 26, 43, 9, 2, 0, 30, 568, 0, 19, 1],
            [6, 1, 0, 12, 12, 340, 101, 22, 6, 46, 10, 76, 66, 21, 0, 4, 2, 64, 16, 17, 8, 14, 77, 3, 26, 138, 25, 21, 6, 4, 5, 14, 21, 7, 69, 10, 525, 24, 1, 0, 26, 4, 32, 47, 3, 20, 19, 9, 32, 57, 10, 5, 1, 41, 572, 0, 27, 2],
            [12, 1, 0, 13, 16, 426, 131, 24, 7, 46, 16, 115, 99, 21, 3, 6, 5, 93, 20, 18, 8, 20, 91, 12, 32, 164, 33, 35, 10, 5, 7, 17, 24, 13, 98, 13, 732, 33, 1, 0, 37, 7, 36, 66, 5, 20, 28, 9, 39, 72, 28, 8, 1, 45, 643, 0, 32, 3],
            [29, 1, 0, 18, 22, 557, 160, 30, 8, 47, 22, 155, 121, 20, 3, 7, 5, 105, 25, 23, 11, 21, 136, 17, 41, 197, 53, 54, 13, 6, 7, 18, 45, 17, 178, 17, 967, 38, 1, 0, 50, 10, 39, 77, 5, 21, 33, 10, 52, 85, 39, 12, 1, 49, 904, 0, 47, 3],
            [39, 3, 0, 20, 22, 698, 160, 68, 16, 47, 22, 216, 146, 21, 3, 10, 8, 161, 30, 23, 18, 26, 196, 32, 60, 218, 65, 60, 21, 11, 9, 21, 56, 26, 267, 23, 1706, 64, 3, 0, 67, 19, 66, 112, 5, 23, 47, 11, 74, 110, 51, 12, 2, 67, 1076, 1, 72, 11],
            [46, 6, 0, 27, 33, 751, 184, 68, 19, 47, 31, 314, 199, 21, 5, 14, 9, 162, 39, 29, 18, 27, 257, 42, 85, 218, 83, 77, 34, 18, 11, 24, 55, 26, 267, 23, 2495, 70, 6, 0, 86, 19, 68, 152, 5, 33, 47, 11, 79, 173, 51, 18, 2, 77, 1014, 1, 92, 15],
            [78, 9, 0, 45, 62, 952, 277, 159, 30, 47, 40, 417, 287, 22, 12, 16, 11, 422, 60, 44, 34, 37, 392, 52, 107, 328, 334, 89, 50, 31, 11, 29, 95, 44, 742, 35, 5365, 123, 18, 0, 119, 44, 88, 206, 5, 44, 81, 11, 154, 260, 80, 22, 3, 99, 1376, 2, 159, 18],
            [83, 12, 0, 78, 96, 1177, 363, 194, 38, 49, 71, 563, 420, 23, 14, 26, 23, 585, 86, 45, 44, 47, 538, 56, 149, 413, 552, 115, 80, 53, 15, 37, 114, 44, 890, 43, 8310, 172, 19, 0, 173, 49, 114, 303, 14, 54, 126, 14, 233, 394, 78, 29, 3, 122, 1524, 7, 207, 19],
            [131, 15, 0, 118, 122, 1364, 390, 194, 45, 49, 77, 659, 507, 23, 15, 37, 36, 753, 128, 68, 57, 87, 585, 70, 193, 525, 788, 138, 140, 74, 21, 38, 161, 55, 1327, 43, 11710, 253, 28, 0, 248, 53, 114, 396, 21, 66, 171, 14, 371, 581, 136, 29, 3, 156, 1793, 8, 282, 23],
            [157, 20, 0, 152, 165, 1646, 591, 327, 56, 49, 204, 1004, 621, 30, 27, 53, 42, 1049, 204, 90, 65, 103, 837, 89, 244, 646, 1035, 167, 207, 87, 34, 51, 190, 74, 1914, 57, 15800, 305, 28, 0, 356, 67, 161, 509, 23, 83, 196, 21, 505, 643, 162, 52, 6, 220, 1997, 16, 381, 26],
            [196, 30, 0, 235, 192, 2108, 704, 415, 68, 49, 120, 1227, 772, 28, 29, 56, 68, 1285, 270, 105, 84, 123, 1172, 107, 290, 777, 1329, 234, 249, 187, 34, 51, 245, 101, 2844, 83, 20884, 353, 30, 0, 443, 81, 191, 698, 31, 106, 298, 28, 614, 758, 257, 75, 7, 254, 2221, 16, 425, 26],
            [242, 34, 0, 326, 219, 2538, 723, 618, 104, 49, 141, 1412, 1026, 28, 32, 90, 81, 1537, 368, 124, 100, 162, 1388, 118, 349, 1159, 1793, 261, 320, 257, 51, 66, 278, 101, 3675, 100, 25681, 495, 36, 0, 567, 106, 210, 946, 39, 124, 342, 30, 772, 955, 298, 95, 17, 293, 2328, 22, 481, 29],
            [381, 41, 0, 401, 280, 2998, 1021, 875, 119, 49, 187, 1682, 1247, 28, 37, 91, 91, 1865, 477, 146, 134, 197, 1795, 142, 425, 1838, 2296, 286, 377, 354, 65, 71, 323, 108, 4402, 113, 30841, 590, 45, 0, 704, 164, 266, 1260, 51, 132, 424, 41, 916, 1229, 340, 125, 17, 396, 2591, 39, 621, 44],
            [517, 56, 0, 508, 335, 3899, 1430, 1012, 130, 49, 231, 2357, 1525, 28, 45, 95, 146, 2538, 645, 179, 172, 247, 2304, 155, 583, 2417, 2845, 344, 485, 520, 90, 74, 420, 137, 6876, 113, 37877, 738, 51, 0, 868, 248, 316, 1795, 64, 165, 424, 46, 1097, 1563, 396, 158, 17, 466, 3207, 52, 728, 53],
            [587, 58, 0, 665, 381, 4657, 1433, 1291, 163, 49, 271, 2900, 2000, 28, 51, 106, 205, 3024, 979, 235, 206, 301, 2744, 168, 775, 3240, 3634, 396, 579, 666, 109, 82, 536, 158, 8825, 136, 44876, 887, 68, 0, 1137, 322, 416, 2345, 79, 203, 542, 58, 1318, 1937, 472, 184, 19, 607, 3477, 76, 926, 70],
            [694, 85, 0, 773, 409, 5095, 1740, 1524, 214, 49, 304, 3763, 2366, 103, 55, 149, 234, 3491, 1233, 298, 266, 380, 3315, 211, 995, 4257, 4650, 441, 663, 836, 129, 96, 626, 187, 11124, 208, 52410, 1020, 94, 0, 1406, 377, 479, 2845, 100, 239, 660, 68, 1511, 2455, 602, 211, 22, 740, 4030, 96, 1055, 82],
            [825, 102, 0, 919, 426, 5852, 2307, 1993, 232, 49, 342, 4246, 2651, 103, 56, 149, 281, 4596, 1513, 336, 330, 438, 3540, 253, 1239, 4955, 5488, 503, 759, 915, 154, 108, 920, 214, 13386, 237, 59648, 1191, 98, 0, 1653, 429, 548, 3432, 127, 294, 774, 90, 1720, 2792, 720, 235, 23, 890, 4465, 113, 1164, 86],
            [899, 114, 0, 1157, 473, 7138, 2311, 2571, 264, 49, 401, 5473, 2808, 103, 58, 175, 340, 5056, 1786, 424, 372, 479, 4025, 275, 1413, 5752, 6498, 576, 847, 1051, 171, 145, 1012, 314, 16636, 237, 66663, 1313, 109, 0, 1933, 481, 606, 4155, 174, 408, 925, 101, 1917, 3147, 798, 256, 30, 1020, 4923, 145, 1230, 94],
            [987, 119, 0, 1289, 523, 8210, 2966, 3128, 319, 49, 495, 6741, 3929, 103, 69, 204, 515, 5994, 2158, 497, 434, 628, 5237, 303, 1660, 6620, 7615, 629, 937, 1357, 198, 172, 1114, 357, 18696, 315, 75833, 1535, 122, 2, 2199, 568, 690, 4963, 239, 488, 1083, 108, 2391, 3809, 888, 293, 30, 1249, 5432, 162, 1412, 109],
            [1060, 132, 0, 1530, 584, 9399, 2982, 3557, 368, 49, 586, 6956, 4638, 103, 77, 224, 566, 6980, 2564, 547, 485, 632, 6424, 303, 1986, 7738, 9315, 689, 1073, 1613, 208, 210, 1279, 367, 22255, 340,
                83948, 1675, 142, 6, 2547, 721, 736, 6009, 286, 566, 1293, 129, 2933, 4355, 888, 321, 30, 1483, 5608, 191, 1556, 130
            ],
            [1233, 143, 0, 1715, 643, 10773, 3342, 3824, 393, 49, 653, 9008, 5348, 103, 82, 256, 776, 7695, 3038, 614, 553, 770, 9149, 376, 2331, 8966, 10791, 742, 1177, 1857, 241, 246, 1463, 316, 25590, 388, 92506, 1977, 159, 6, 2901, 881, 826, 7268, 316, 645, 1554, 165, 3013, 5069, 1092, 338, 30, 1706, 6389, 216, 1748, 150],
            [1495, 157, 0, 1937, 704, 12004, 3742, 4914, 450, 49, 757, 10268, 5831, 103, 84, 319, 891, 8904, 3437, 699, 629, 770, 10297, 432, 2758, 10402, 12744, 788, 1358, 1864, 243, 279, 1514, 479, 29895, 534, 102987, 2251, 173, 8, 3312, 990, 899, 8570, 316, 711, 1700, 187, 3067, 5734, 1255, 389, 37, 2012, 6846, 237, 2012, 162],
            [1614, 171, 0, 2187, 743, 12837, 4188, 5276, 593, 49, 902, 11537, 6160, 103, 93, 351, 1022, 10357, 3953, 787, 698, 917, 12496, 456, 3125, 11736, 14225, 865, 1455, 2310, 265, 321, 1742, 540, 34124, 534, 113833, 2486, 186, 8, 3739, 1161, 899, 10444, 452, 806, 1917, 212, 3322, 6567, 1435, 461, 40, 2407, 7247, 282, 2030, 187],
            [1765, 185, 0, 2486, 837, 15034, 4950, 5675, 673, 49, 1002, 12350, 6647, 103, 112, 371, 1078, 11259, 4411, 869, 751, 955, 13010, 470, 3617, 12500, 15718, 935, 1638, 2347, 286, 364, 1855, 621, 37505, 670, 123160, 2649, 207, 8, 4043, 1254, 1068, 11589, 475, 922, 2049, 240, 3633, 7209, 1608, 512, 42, 2640, 7825, 324, 2320, 197],
            [1952, 190, 0, 2732, 875, 16019, 5183, 6906, 783, 49, 1097, 13324, 7314, 103, 113, 387, 1101, 12262, 4956, 946, 849, 955, 14867, 499, 4045, 13837, 17221, 986, 1738, 2736, 299, 417, 1953, 715, 41090, 757, 131815, 2962, 225, 8, 4453, 1329, 1068, 13127, 513, 1082, 2232, 288, 3802, 8043, 1685, 543, 43, 2878, 8311, 345, 2449, 210],
            [2169, 213, 0, 2870, 946, 17351, 5429, 7781, 928, 49, 1211, 14545, 8822, 103, 121, 410, 1170, 12271, 5510, 1046, 912, 1149, 16284, 519, 4371, 15202, 18970, 1069, 1915, 3130, 319, 447, 2124, 715, 44416, 876, 139875, 3299, 237, 8, 4782, 1474, 1132, 14853, 573, 1229, 2417, 320, 4139, 8925, 1746, 575, 43, 3335, 8692, 412, 2578, 216],
            [2328, 226, 0, 3036, 1000, 18897, 5655, 7781, 1116, 49, 1440, 15456, 9901, 103, 121, 410, 1210, 15078, 5943, 1145, 1046, 1149, 17030, 537, 5529, 16790, 20346, 1154, 2003, 3209, 332, 519, 2259, 747, 47437, 902, 151061, 3499, 251, 11, 5148, 1526, 1181, 16631, 620, 1450, 2417, 393, 4363, 9777, 1855, 605, 45, 3645, 9276, 483, 2710, 221],
            [2703, 235, 0, 3018, 1119, 19710, 5655, 9784, 1209, 49, 1523, 16364, 10566, 103, 128, 442, 1232, 15079, 6351, 1270, 1116, 1341, 18283, 560, 6185, 18941, 21504, 1240, 2260, 3432, 354, 568, 2456, 819, 51027, 865, 161779, 3736, 269, 11, 5512, 1686, 1321, 18300, 683, 1727, 2793, 447, 4634, 11208, 1856, 628, 45, 4042, 9639, 514, 2886, 230],
            [2947, 246, 0, 3112, 1171, 21081, 6202, 10538, 1326, 49, 1660, 17531, 11485, 103, 130, 442, 1354, 17887, 6907, 1388, 1117, 1693, 19253, 586, 6968, 20974, 22434, 1336, 2469, 3897, 365, 635, 2722, 819, 54588, 1081, 172348, 3965, 278, 11, 5878, 1794, 1322, 20051, 725, 1727, 3067, 536, 4891, 12105, 2103, 679, 50, 4509, 10119, 574, 3068, 239],
            [3217, 257, 0, 3393, 1228, 21706, 6513, 11510, 1479, 49, 1778, 18494, 12159, 103, 133, 465, 1396, 19180, 7435, 1510, 1275, 1693, 20014, 616, 7694, 22860, 23605, 1427, 2642, 4108, 377, 699, 2702, 885, 58151, 1091, 181026, 4354, 293, 11, 6250, 1868, 1371, 21719, 788, 2349, 3211, 626, 5132, 13023, 2207, 711, 51, 5077, 10434, 577, 3213, 261],
            [3563, 272, 0, 3542, 1280, 22795, 7307, 12035, 1625, 49, 1875, 19895, 12452, 103, 133, 499, 1407, 20852, 7928, 1587, 1344, 1963, 20595, 633, 8225, 25475, 24244, 1621, 2781, 4269, 387, 791, 2836, 929, 61850, 1245, 189033, 4570, 308, 11, 6604, 1970, 1527, 22938, 897, 2665, 3320, 730, 5508, 13677, 2303, 727, 51, 5274, 10609, 593, 3341, 270],
            [3734, 277, 0, 3705, 1410, 23931, 7691, 13381, 1758, 49, 1955, 21019, 13315, 103, 133, 504, 1426, 22025, 8359, 1710, 1390, 2018, 21016, 698, 8936, 26867, 25635, 1621, 2942, 4515, 394, 814, 2990, 985, 64584, 1262, 195749, 4886, 331, 11, 6975, 2069, 1584, 24292, 903, 2665, 3391, 868, 5610, 14275, 2363, 748, 51, 5747, 10635, 611, 3428, 275],
            [3953, 285, 0, 3809, 1498, 25356, 7950, 13989, 1926, 49, 2058, 21628, 14578, 103, 133, 511, 1464, 23248, 8527, 1899, 1441, 2048, 21518, 735, 9472, 28164, 27001, 1695, 3087, 4746, 399, 897, 3134, 922, 68824, 1345, 203020, 5113, 341, 11, 7285, 2184, 1633, 25465, 923, 3251, 3553, 988, 5827, 15006, 2417, 752, 51, 6182, 10799, 640, 3555, 282],
            [4075, 293, 0, 3964, 1569, 26686, 7956, 14755, 2014, 49, 2197, 22511, 14987, 103, 135, 524, 1473, 24593, 8960, 1995, 1504, 2210, 21951, 770, 10032, 29918, 28059, 1809, 3360, 4791, 404, 901, 3211, 1139, 71030, 1484, 214454, 5340, 365, 13, 7794, 2263, 1663, 26753, 974, 3251, 3656, 1168, 5827, 15907, 2548, 759, 51, 6500, 10942, 702, 3721, 287],
            [4345, 300, 0, 4237, 1620, 27677, 8286, 15884, 2070, 49, 2350, 23343, 15669, 103, 135, 530, 1587, 25734, 9542, 2141, 1615, 2435, 22532, 796, 10784, 32181, 28809, 1809, 3624, 5174, 415, 952, 3214, 1139, 75317, 1484, 223691, 5639, 393, 13, 8414, 2357, 1736, 28258, 1043, 3529, 3931, 1311, 6375, 16876, 2683, 774, 51, 6889, 11057, 728, 3875, 296],
            [4571, 309, 0, 4511, 1695, 29157, 8691, 16809, 2317, 49, 2476, 24759, 17194, 103, 136, 541, 1609, 27578, 10154, 2332, 1730, 2522, 23118, 827, 11572, 34402, 30023, 2070, 3793, 5371, 422, 1066, 3524, 1287, 78467, 1597, 230597, 6045, 393, 13, 9107, 2465, 1785, 29888, 1068, 4177, 4099, 1411, 6263, 17849, 2793, 779, 51, 7491, 11517, 775, 4053, 305],
            [4712, 314, 0, 4724, 1744, 30491, 9047, 17550, 2538, 49, 2666, 25492, 17669, 103, 136, 574, 1655, 29160, 10641, 2513, 1821, 2707, 23580, 847, 12326, 36372, 30791, 2209, 3974, 5579, 426, 1249, 3626, 1342, 81420, 1798, 241712, 6328, 528, 14, 10222, 2465, 1844, 31652, 1118, 4491, 4248, 1542, 6589, 18704, 2917, 803, 53, 8053, 11776, 785, 4199, 309],
            [4888, 319, 0, 4933, 1781, 31431, 9730, 17962, 2538, 49, 2793, 26314, 18301, 103, 136, 580, 1668, 30357, 11211, 2902, 1905, 2960, 23928, 867, 12847, 38077, 31424, 2356, 4274, 5743, 433, 1474, 3728, 1390, 85301, 1845, 247815, 6601, 585, 14, 11602, 2567, 1910, 32902, 1213, 4706,
                4377, 1635, 7070, 19260, 3069, 813, 53, 8542, 12255, 890, 4346, 313
            ],
            [5079, 321, 0, 5068, 1973, 33686, 9730, 19815, 2745, 49, 2927, 27059, 19407, 103, 136, 584, 1672, 31513, 11688, 3159, 2048, 3050, 24523, 875, 13684, 38077, 32000, 2470, 4512, 5890, 433, 1648, 3830, 1447, 88722, 1971, 253060, 6895, 627, 14, 12919, 2680, 1957, 33914, 1252, 5090, 4446, 1685, 7238, 19751, 3213, 816, 53, 8990, 12114, 902, 4499, 317],
            [5317, 329, 0, 5256, 1990, 35465, 10473, 20360, 2931, 49, 3098, 27869, 19881, 103, 136, 586, 1736, 33059, 12097, 3641, 2164, 3204, 24854, 888, 14193, 41199, 32667, 2567, 4716, 6066, 437, 1685, 3937, 1490, 92387, 1971, 258361, 7134, 644, 14, 13725, 2807, 2004, 35249, 1298, 5500, 4439, 1755, 7394, 20574, 3297, 818, 53, 9630, 12392, 908, 4625, 443],
            [5593, 335, 0, 5473, 2276, 37344, 10891, 22469, 3200, 49, 3206, 28309, 21214, 103, 136, 592, 1766, 35107, 12438, 3748, 2331, 3378, 25258, 907, 14775, 42944, 33966, 2722, 4894, 6277, 439, 1813, 4081, 1588, 95914, 2210, 263292, 7495, 679, 14, 14117, 2894, 2059, 36082, 1252, 5841, 4761, 1858, 7394, 21321, 3445, 823, 54, 10266, 12596, 939, 4845, 447],
            [5832, 337, 0, 5772, 2599, 39561, 11278, 23100, 3308, 49, 3361, 29648, 21883, 103, 139, 596, 1836, 36937, 13039, 3924, 2721, 3479, 25739, 937, 15737, 46023, 35296, 2942, 5153, 6506, 442, 2202, 4208, 1670, 100025, 2379, 263460, 7820, 709, 14, 14694, 3017, 2127, 38379, 1416, 6256, 4917, 1956, 8266, 22650, 3612, 825, 54, 10998, 12753, 981, 5052, 453],
            [6026, 339, 0, 6045, 2810, 41355, 12256, 23936, 3442, 49, 3528, 30533, 22491, 103, 141, 601, 1870, 39658, 13681, 4445, 2959, 3779, 26140, 965, 16616, 50969, 36641, 3185, 5434, 6788, 444, 2424, 4398, 1720, 102196, 2521, 271590, 8290, 748, 14, 15169, 3121, 2177, 40208, 1276, 6699, 5070, 2040, 8728, 23642, 3782, 827, 54, 11594, 12977, 1010, 5356, 473],
            [6026, 339, 0, 6286, 2911, 42368, 12968, 24583, 3576, 49, 3699, 30839, 23222, 103, 141, 605, 1887, 41777, 14399, 5092, 3135, 3915, 26512, 965, 17766, 53348, 37074, 3446, 5718, 6935, 445, 2719, 4539, 1797, 105498, 2660, 282143, 8768, 803, 14, 15587, 3194, 2253, 41153, 1307, 7129, 5253, 2147, 9189, 24153, 3948, 843, 55, 12366, 13319, 1010, 5687, 491],
            [6421, 340, 0, 6534, 3001, 43558, 13441, 25269, 4034, 49, 3841, 31532, 23486, 103, 141, 606, 1897, 43903, 15012, 5476, 3277, 4085, 26773, 1015, 18581, 54938, 37778, 3602, 5911, 7120, 448, 3028, 4734, 1864, 109038, 2726, 288045, 8997, 867, 14, 15972, 3254, 2311, 42616, 1371, 7439, 5498, 2212, 9667, 24967, 4123, 851, 57, 12970, 13521, 1055, 5912, 502],
            [6539, 345, 0, 6725, 3069, 44966, 13879, 25997, 4162, 49, 3892, 32138, 24302, 103, 141, 607, 1897, 45883, 15961, 5868, 3473, 4156, 27068, 1023, 19487, 56462, 38210, 3811, 6094, 7305, 449, 3358, 4700, 1938, 111188, 2825, 291996, 9428, 942, 14, 16325, 3281, 2354, 43558, 1389, 7708, 5613, 2244, 9918, 25321, 4236, 855, 57, 13538, 13686, 1063, 6081, 520],
            [6750, 351, 0, 6955, 3127, 46164, 14316, 26312, 4575, 49, 3994, 32848, 24922, 103, 141, 609, 1952, 48102, 16588, 6376, 3652, 4375, 27286, 1040, 20113, 58302, 39262, 4181, 6342, 7450, 451, 3517, 4821, 2010, 113856, 2974, 295106, 9755, 991, 14, 16769, 3410, 2385, 45137, 1400, 7927, 5735, 2313, 10052, 26357, 4345, 862, 57, 14339, 13842, 1095, 6289, 536],
            [6912, 355, 0, 7209, 3193, 48747, 14758, 26767, 4655, 49, 4106, 33193, 25775, 103, 141, 613, 1952, 50358, 17182, 6843, 3839, 4537, 27660, 1056, 20849, 60265, 40399, 4644, 6569, 7660, 451, 3851, 4934, 2058, 116365, 3213, 299691, 10180, 1033, 14, 17303, 3473, 2446, 46327, 1433, 8247, 5882, 2373, 10366, 27257, 4497, 862, 57, 14962, 14070, 1110, 6520, 545],
            [7088, 355, 0, 7655, 3281, 50130, 15284, 27700, 4734, 49, 4323, 33690, 26264, 103, 145, 618, 1984, 52918, 17835, 7145, 4413, 4708, 28001, 1095, 21742, 62205, 41379, 5136, 6815, 7818, 453, 4281, 5053, 2146, 118652, 3411, 304372, 10754, 1067, 14, 18027, 3618, 2510, 47971, 1539, 8621, 6095, 2449, 10735, 28727, 4672, 866, 66, 15847, 14327, 1125, 6854, 559],
            [7294, 364, 0, 7969, 3337, 52026, 15793, 28764, 4918, 49, 4658, 34728, 27489, 103, 145, 619, 2015, 56055, 18630, 7884, 4634, 4882, 28711, 1123, 23472, 64311, 42356, 5730, 7212, 8067, 453, 5008, 5248, 2310, 121190, 3513, 308314, 11070, 1107, 14, 18743, 3748, 2579, 49579, 1575, 8962, 6258, 2525, 11891, 29692, 4828, 879, 66, 16902, 14637, 1152, 7314, 566],
            [7611, 365, 0, 8364, 3372, 53347, 16225, 29287, 5038, 49, 4797, 35463, 28331, 103, 145, 620, 2061, 58505, 19295, 8643, 4885, 4879, 29140, 1153, 24473, 66263, 43207, 6232, 7441, 8356, 455, 5317, 5389, 2429, 123717, 3732, 312977, 11588, 1153, 14, 19335, 3851, 2635, 50494, 1757, 9289, 6489, 2588, 12661, 30917, 4985, 886, 66, 17738, 15003, 1185, 7660, 579],
            [7888, 368, 0, 8640, 3437, 54903, 16635, 29287, 5208, 49, 5016, 36078, 28665, 103, 145, 620, 2061, 61499, 19933, 9175, 5156, 5130, 29340, 1185, 25462, 68087, 43801, 6663, 7550, 8618, 455, 5661, 5472, 2518, 126744, 3850, 316415, 11770, 1191, 14, 19914, 3972, 2680, 51225, 1808, 9477, 6626, 2631, 13177, 31998, 5175, 897, 66, 18672, 15185, 1195, 7964, 586],
            [8112, 370, 0, 8924, 3491, 55884, 16918, 29973, 5288, 49, 5170, 36897, 29451, 103, 145, 621, 2106, 63777, 20507, 9703, 5383, 5245, 29673, 1205, 26408, 69087, 43990, 7234, 7877, 8946, 457, 6037, 5630, 2588, 128269, 4031, 318953, 11971, 1225, 14, 20474, 4044, 2759, 52816, 1843, 9652, 6757, 2668, 13571, 32783, 5317, 902, 66, 19493, 15462, 1224, 8236, 596],
            [8437, 371, 0, 9305, 3525, 58456, 17367, 30621, 5371, 49, 5322, 37439, 29998, 103, 145, 625, 2127, 65889, 21033, 10111, 5648, 5822, 29996, 1226, 27117, 70271, 44451, 7851, 8207, 9121, 456, 6373, 5660, 2636, 130593, 4138, 321192, 12510, 1266, 14, 20969, 4127, 2839, 53864, 1924, 9933, 6841, 2721, 13690, 33912, 5449, 907, 66, 20257, 15594, 1246, 8566, 604],
            [8691, 372, 0, 9707, 3611, 60616, 17832, 30995, 5778, 49, 5461, 38002, 30743, 103, 149, 626, 2158, 68232, 21870, 10404, 5993, 5934, 30399, 1254, 28163, 72025, 45179, 8579, 8424, 9323, 456, 6689, 5741, 2741, 131890, 4291, 323978, 13053, 1323, 15, 21576, 4202, 2916, 54800, 1968, 10205, 6936, 2780, 13938, 34928, 5595,
                908, 66, 20257, 15905, 1242, 8901, 631
            ],
            [9046, 374, 0, 9945, 3703, 62148, 18370, 31784, 5939, 49, 5654, 38828, 31618, 103, 149, 629, 2178, 70871, 22503, 11059, 6332, 6129, 30652, 1330, 29374, 73721, 45745, 9365, 8686, 9581, 456, 7334, 5855, 2843, 133991, 4493, 327469, 13540, 1371, 15, 22131, 4330, 2989, 55956, 2031, 10530, 7142, 2906, 14096, 36036, 5724, 916, 66, 21570, 16231, 1287, 9215, 635],
            [9385, 377, 0, 10526, 3747, 63779, 18827, 32411, 6111, 49, 5899, 39199, 32181, 103, 151, 629, 2178, 73760, 23146, 11457, 6667, 6288, 30855, 1374, 30485, 75333, 46386, 10088, 9090, 9733, 458, 7818, 5920, 2947, 135840, 4673, 330407, 14006, 1425, 15, 23016, 4424, 3068, 57371, 2156, 10779, 7367, 3145, 14441, 37246, 5919, 919, 68, 22342, 16388, 1323, 9590, 644],
            [9668, 378, 0, 10960, 3747, 66558, 19375, 32984, 6277, 49, 6102, 40001, 32588, 103, 151, 631, 2205, 76085, 23732, 11671, 6829, 6440, 31417, 1408, 31534, 76743, 46815, 10790, 9378, 9911, 458, 8093, 6171, 3011, 137397, 4778, 333122, 14478, 1464, 16, 23697, 4490, 3160, 58560, 2173, 10989, 7531, 3393, 14768, 38394, 6103, 921, 68, 23196, 16674, 1323, 9939, 653],
            [9889, 379, 0, 11119, 4012, 67600, 19703, 33554, 6277, 49, 6272, 40596, 33580, 103, 151, 632, 2230, 77741, 24126, 11959, 6951, 6440, 31600, 1436, 32587, 77793, 47182, 11271, 9501, 10068, 458, 8171, 6120, 3071, 138754, 4863, 335395, 14938, 1491, 16, 24081, 4589, 3228, 59939, 2198, 11274, 7653, 3517, 14985, 39258, 6251, 927, 69, 24081, 16891, 1360, 10219, 662],
            [10164, 379, 0, 11383, 4043, 69329, 19879, 33765, 6565, 49, 6389, 40982, 34002, 103, 151, 634, 2260, 79007, 24627, 12373, 7159, 6677, 31815, 1462, 33373, 78462, 47552, 11799, 9674, 10157, 459, 8407, 6152, 3160, 140206, 5069, 337055, 15274, 1518, 19, 24777, 4613, 3286, 60459, 2256, 11450, 7792, 3614, 15544, 40555, 6362, 926, 69, 25070, 17122, 1366, 10418, 669],
            [10464, 383, 0, 11736, 4164, 70978, 20157, 34333, 6741, 49, 6485, 41923, 34924, 103, 152, 635, 2293, 83021, 25127, 12912, 7240, 6853, 32050, 1477, 34061, 79332, 48021, 12494, 9908, 10269, 461, 8532, 6313, 3239, 140917, 5212, 338485, 15622, 1571, 19, 25250, 4732, 3358, 61310, 2299, 11614, 7927, 3663, 16111, 41432, 6432, 927, 69, 25800, 17330, 1378, 10611, 675],
            [10700, 383, 0, 12216, 4236, 72798, 20475, 34855, 6952, 49, 6584, 42402, 35427, 103, 152, 638, 2293, 84694, 25473, 13289, 7518, 6853, 32662, 1515, 34812, 80497, 48391, 12917, 10090, 10404, 462, 8912, 6476, 3299, 141560, 5364, 340661, 16352, 1647, 19, 25721, 4858, 3416, 62101, 2329, 11835, 8030, 3732, 16370, 43020, 6620, 929, 69, 26746, 17512, 1398, 10902, 688],
            [11101, 383, 0, 12674, 4366, 74871, 20838, 35464, 7223, 49, 6736, 43210, 35977, 103, 152, 637, 2351, 87937, 26053, 13675, 7705, 7225, 33489, 1565, 35903, 82182, 49582, 13435, 10483, 10594, 462, 9260, 6504, 3382, 142704, 5503, 343051, 16968, 1712, 19, 26357, 4963, 3479, 63105, 2427, 12016, 8189, 3792, 16699, 44480, 6749, 932, 69, 27813, 17773, 1427, 11275, 701],
            [11373, 388, 0, 13169, 4463, 76693, 21232, 36085, 7373, 49, 6871, 44138, 36772, 103, 154, 638, 2351, 90369, 26656, 14049, 7886, 7444, 33837, 1603, 36986, 83421, 50079, 14240, 10801, 10766, 466, 9610, 6733, 3453, 143984, 5662, 345813, 17494, 1761, 19, 26954, 5087, 3541, 64136, 2542, 12219, 8407, 3887, 16960, 45721, 6913, 933, 69, 28672, 17951, 1447, 11685, 716],
            [11674, 388, 0, 13666, 4578, 78725, 21633, 36703, 7547, 49, 7042, 44811, 37212, 103, 154, 639, 2419, 92457, 27280, 14328, 7939, 7688, 34117, 1648, 37968, 84933, 50538, 14969, 11123, 10959, 468, 10220, 6813, 3556, 145089, 5847, 348232, 18130, 1848, 21, 27474, 5237, 3612, 65185, 2589, 12434, 8661, 3959, 17263, 47452, 7068, 934, 69, 29683, 18288, 1470, 12187, 741],
            [11771, 388, 0, 13945, 4759, 80166, 21938, 37419, 7670, 49, 7123, 45588, 37579, 103, 154, 640, 2419, 94191, 27778, 14651, 7953, 7688, 34432, 1687, 38804, 86010, 51142, 15668, 11296, 11108, 468, 10177, 6949, 3596, 146504, 5938, 350121, 18673, 1900, 21, 27923, 5310, 3623, 65700, 2646, 12674, 8816, 3987, 17359, 48396, 7238, 940, 69, 30388, 18433, 1492, 12543, 754],
            [12086, 388, 0, 14208, 4813, 81457, 22202, 38116, 7869, 49, 7270, 46442, 38283, 103, 154, 640, 2455, 96485, 28255, 14955, 8303, 7935, 34709, 1713, 39762, 87052, 51915, 16372, 11432, 11242, 470, 10625, 7061, 3652, 148240, 6096, 351371, 19207, 1931, 21, 28454, 5398, 3687, 66669, 2710, 12795, 8942, 4027, 18011, 49177, 7384, 940, 69, 31140, 18611, 1502, 12687, 766],
            [12376, 400, 0, 14576, 4923, 83752, 22482, 38430, 8037, 49, 7434, 46944, 38855, 103, 154, 641, 2455, 98030, 28705, 15296, 8353, 8069, 35038, 1741, 41546, 87925, 52350, 17029, 11704, 11393, 471, 10854, 7096, 3721, 149356, 6192, 352845, 19239, 1994, 21, 28952, 5489, 3726, 67311, 2805, 12951, 9056, 4085, 18412, 50552, 7518, 944, 69, 32145, 18811, 1502, 12885, 776],
            [13052, 401, 0, 14906, 5003, 85997, 22797, 39017, 8194, 49, 7551, 47471, 39801, 103, 154, 643, 2506, 100418, 29274, 15620, 8507, 8167, 35316, 1819, 42323, 88970, 53009, 17670, 11967, 11528, 478, 11122, 7388, 3868, 150776, 6317, 354370, 20262, 2095, 21, 29436, 5532, 3801, 68126, 2866, 13356, 9175, 4177, 18412, 51673, 7710, 944, 69, 32908, 18971, 1567, 13413, 787],
            [13288, 401, 0, 15348, 5458, 88031, 23191, 39208, 8386, 49, 7788, 48675, 40663, 103, 165, 647, 2506, 102688, 29936, 16170, 8625, 8286, 36504, 1877, 43531, 90084, 53510, 18200, 12222, 11689, 479, 11427, 7400, 3935, 151586, 6472, 356458, 20512, 2229, 22, 30167, 5680, 3817, 69252, 2913, 13571, 9381, 4177, 18961, 53053, 7874, 950, 69, 34137, 19117, 1593, 13885, 801],
            [13670, 403, 0, 15624, 5612, 90252, 23487, 39640, 8529, 49, 7893, 49451, 41482, 103, 165, 642, 2595, 105444, 30409, 16492, 8909, 8426, 36925, 1948, 44424, 90889, 53913, 19005, 12625, 11836, 479, 11662, 7525, 4014, 152579, 6625, 358154, 22110, 2317, 22, 30794, 5849, 3864, 70211, 3030, 13736, 9638, 4356, 19394, 53539, 8057, 952, 69, 34950, 19265, 1705, 14396, 803],
            [14117, 407, 0, 16053, 5775, 92539, 23964, 40022, 8529, 49, 7966, 50127, 42242, 103, 165, 643, 2595, 107796, 30901, 16898, 8946, 8571, 36925, 2013, 45495,
                91662, 54365, 19845, 13005, 11966, 479, 11963, 7526, 4089, 153140, 6625, 359926, 22864, 2365, 22, 31408, 5960, 3888, 71009, 3100, 13952, 9895, 4464, 19785, 54776, 8260, 954, 69, 35749, 19265, 1705, 14877, 813
            ],
            [14478, 407, 0, 16377, 5922, 94020, 24174, 40468, 8809, 49, 8110, 50867, 42902, 103, 166, 643, 2626, 110304, 31376, 17251, 9004, 8571, 37169, 2055, 46313, 92675, 54679, 20573, 13260, 12149, 479, 12134, 7881, 4149, 154154, 6943, 361515, 23365, 2418, 22, 31911, 6037, 3927, 71563, 3189, 14065, 10096, 4563, 20111, 55861, 8392, 956, 69, 36244, 19828, 1759, 15277, 838],
            [14986, 408, 0, 16575, 6029, 96400, 24256, 40873, 8965, 49, 8225, 51746, 43400, 103, 166, 643, 2626, 112017, 31715, 17557, 9125, 8571, 37809, 2074, 47152, 93271, 54881, 21315, 13458, 12476, 479, 12362, 7956, 4197, 155092, 7026, 362764, 24057, 2457, 22, 32477, 6090, 3949, 71925, 3260, 14065, 10178, 4586, 20535, 56409, 8521, 962, 69, 37727, 20065, 1774, 15584, 843],
            [15650, 410, 0, 16864, 6180, 99387, 24552, 41303, 9066, 49, 8334, 52255, 43983, 103, 167, 643, 2626, 113195, 32078, 17703, 9199, 8951, 38054, 2109, 47687, 93693, 55104, 21960, 13731, 12579, 479, 12619, 8057, 4231, 155764, 7130, 363836, 24455, 2422, 22, 33006, 6138, 3967, 72778, 3324, 14210, 10416, 4653, 20895, 57230, 8620, 967, 69, 39342, 20181, 1774, 15863, 850],
            [16032, 411, 0, 17318, 6277, 101050, 24754, 41288, 9096, 49, 8406, 52634, 44638, 103, 170, 644, 2699, 114306, 32437, 18369, 9291, 9077, 38497, 2137, 48423, 94220, 55608, 22464, 14044, 12816, 481, 12984, 8150, 4286, 156628, 7252, 364965, 24916, 2439, 22, 33439, 6229, 4038, 73557, 3397, 14353, 10623, 4710, 21285, 58542, 8706, 971, 69, 40249, 20406, 1899, 16462, 860],
            [16530, 424, 0, 17877, 6538, 103813, 25107, 41559, 9171, 49, 8492, 53285, 45266, 103, 171, 647, 2770, 115833, 33068, 18586, 9371, 9185, 38802, 2189, 49709, 94895, 56014, 22947, 14372, 12981, 485, 13249, 8248, 4389, 157185, 7364, 366733, 25800, 2481, 22, 33915, 6273, 4086, 74220, 3486, 14494, 10788, 4793, 21679, 60395, 8921, 974, 69, 41401, 20764, 1935, 16974, 876],
            [17031, 429, 0, 18472, 6777, 106622, 25598, 41762, 9236, 49, 8538, 54497, 45881, 103, 172, 649, 2770, 117455, 33558, 18957, 9662, 9464, 38802, 2226, 50988, 95512, 56621, 23531, 14793, 13084, 493, 13648, 8376, 4492, 158844, 7493, 368284, 26885, 2520, 22, 34566, 6338, 4131, 74984, 3647, 14635, 11131, 4866, 22063, 60901, 9264, 975, 69, 42533, 21071, 1951, 17707, 891],
            [17359, 433, 0, 19258, 7013, 109895, 26084, 42022, 9422, 49, 8717, 55424, 46331, 103, 172, 651, 2803, 118917, 34211, 19244, 9690, 9704, 39577, 2282, 52015, 96301, 56969, 24190, 15229, 13298, 505, 13905, 8517, 4492, 159608, 7624, 369660, 27794, 2554, 22, 35033, 6418, 4185, 75697, 3718, 14819, 11394, 4960, 22566, 62675, 9533, 977, 69, 43611, 21349, 1989, 18230, 898],
            [17952, 459, 0, 19936, 7253, 111951, 26364, 42201, 9498, 49, 8801, 56163, 47063, 103, 172, 652, 2839, 120260, 34574, 19552, 9700, 9704, 39916, 2325, 52778, 96965, 57397, 24850, 15523, 13438, 515, 14101, 8628, 4651, 160445, 7689, 370770, 28785, 2577, 22, 35513, 6418, 4243, 76129, 3776, 14928, 11861, 4993, 22566, 64652, 9797, 981, 69, 44607, 21702, 2010, 18403, 903],
            [18630, 466, 0, 20129, 7443, 114733, 26563, 42740, 9605, 49, 8857, 56830, 47902, 103, 175, 652, 2839, 121234, 34830, 19699, 9920, 10046, 40341, 2349, 53327, 100805, 57532, 25208, 15752, 13724, 519, 14345, 8702, 4685, 160918, 7800, 371711, 29592, 2625, 22, 35984, 6573, 4302, 76646, 3873, 14991, 12148, 5034, 22566, 65593, 9999, 983, 70, 45398, 21977, 2028, 18543, 910],
            [18766, 486, 0, 21264, 7818, 117215, 26774, 42979, 9685, 49, 8886, 57447, 48207, 103, 175, 653, 2933, 122848, 35237, 20019, 9965, 10185, 40746, 2377, 54175, 101163, 57731, 25508, 16041, 14015, 523, 14616, 8858, 4749, 161545, 8024, 373040, 30023, 2646, 23, 36350, 6692, 4335, 77225, 3935, 15112, 12415, 5067, 24342, 67310, 10202, 988, 70, 46239, 22157, 2056, 18917, 912],
            [18851, 504, 0, 22356, 8067, 119348, 27046, 43091, 9712, 49, 9016, 58764, 48894, 103, 177, 653, 2933, 123830, 35712, 20300, 10092, 10410, 41133, 2418, 54982, 101592, 58035, 25870, 16322, 14189, 525, 14885, 8951, 4795, 162068, 8140, 374085, 31276, 2679, 24, 36792, 6805, 4399, 77780, 4023, 15219, 12415, 5162, 24833, 68877, 10497, 990, 70, 46905, 22484, 2077, 19400, 915],
            [19072, 512, 0, 22886, 8425, 122168, 27346, 43239, 9746, 49, 9120, 60183, 49859, 103, 179, 655, 2990, 124759, 36096, 20806, 10167, 10705, 41562, 2446, 55858, 102063, 58241, 26273, 16560, 14438, 539, 15139, 9129, 4876, 162530, 8353, 375133, 32075, 2706, 26, 37282, 6907, 4474, 78335, 4508, 15325, 12415, 5247, 25190, 70555, 10813, 1026, 71, 47856, 22729, 2102, 19892, 921],
            [19387, 523, 0, 24439, 8651, 125738, 27601, 43460, 9773, 49, 9199, 61488, 50621, 103, 179, 664, 3111, 125915, 36578, 21154, 10306, 10977, 41989, 2482, 56770, 102557, 63777, 26980, 16769, 14572, 541, 15406, 9309, 4953, 163336, 8672, 376208, 33295, 2745, 26, 37758, 7007, 4570, 78815, 4620, 15441, 13453, 5277, 25664, 72548, 11252, 1027, 71, 48532, 22993, 2119, 20249, 933],
            [20043, 535, 0, 25451, 9101, 128593, 27834, 43818, 9845, 49, 9269, 62758, 51359, 103, 179, 673, 3139, 126890, 36997, 21478, 10361, 11287, 42486, 2524, 57482, 103132, 64229, 27501, 17039, 14951, 540, 15572, 9491, 5019, 163893, 8800, 377316, 34718, 2816, 26, 38111, 7059, 4570, 79505, 4915, 15441, 13453, 5367, 26177, 74470, 11798, 1046, 71, 49397, 23442, 2136, 20571, 939],
            [20500, 543, 0, 26989, 9426, 130615, 27987, 43968, 9942, 49, 9332, 63938, 51898, 103, 179, 675, 3139, 127757, 37397, 21712, 10406, 11287, 42816, 2570, 57973, 103436, 64648, 27886, 17270, 15023, 545, 15664, 9669, 5043, 164164, 8940, 378097, 35625, 2861, 27, 38476, 7150, 4662, 79908, 4985, 15441, 14286, 5438, 26493, 75408, 12066, 1063, 71, 50679, 23729, 2144, 20835, 947],
            [20925, 562, 0, 27678, 9740, 133816, 28169, 44092, 9972, 49, 9389, 64904, 52497, 103, 179, 676, 3189, 128415, 37623, 22007, 10544, 11476, 43050, 2588, 58404, 103626, 64944, 28224, 17768, 15158, 548, 15786, 9816, 5079, 164497,
                9062, 378799, 36517, 2880, 28, 38837, 7205, 4922, 80339, 5046, 15642, 14800, 5471, 27005, 76463, 12322, 1075, 71, 51251, 24041, 2161, 21038, 960
            ],
            [21422, 572, 0, 28296, 10080, 136641, 28333, 44179, 10020, 49, 9474, 66000, 53249, 103, 180, 682, 3221, 129212, 38033, 22237, 10609, 11707, 43612, 2606, 58904, 103889, 64998, 28523, 18123, 15352, 554, 15918, 10045, 5079, 164796, 9105, 379482, 37227, 2901, 30, 39162, 7363, 4988, 80870, 5185, 15691, 15228, 5523, 27575, 78208, 12559, 1084, 71, 51738, 24354, 2169, 21308, 970],
            [21989, 592, 0, 29852, 10368, 139715, 28484, 44347, 10056, 49, 9537, 67371, 53980, 103, 180, 685, 3260, 129837, 38337, 22626, 10750, 11883, 44030, 2637, 59465, 104156, 65182, 28869, 18483, 15512, 561, 16058, 10218, 5178, 165346, 9250, 380156, 38473, 2941, 30, 39575, 7483, 5060, 81316, 5329, 15756, 15759, 5604, 27930, 80777, 12864, 1095, 72, 52177, 24354, 2194, 21593, 980],
            [22845, 609, 0, 31267, 10816, 143377, 28632, 44461, 10106, 49, 9589, 69069, 54973, 103, 183, 692, 3260, 130603, 38748, 22973, 10823, 11945, 44472, 2667, 60197, 104667, 65449, 29316, 18483, 15699, 563, 16315, 10473, 5209, 165816, 9367, 380892, 39584, 2980, 30, 40004, 7626, 5237, 81848, 5352, 15862, 16441, 5665, 28340, 82658, 13252, 1110, 72, 52647, 24779, 2217, 21926, 1009],
            [23710, 624, 0, 33039, 11547, 146659, 28807, 44689, 10173, 49, 9654, 70971, 55783, 103, 183, 706, 3353, 131198, 39146, 23350, 10973, 12166, 44995, 2721, 60613, 105059, 65672, 29795, 19091, 15997, 573, 16522, 10704, 5251, 166164, 9526, 381714, 41417, 3016, 30, 40424, 7849, 5377, 82481, 5536, 15947, 17170, 5742, 29118, 84927, 13577, 1119, 72, 53211, 25171, 2249, 22246, 1027],
            [24601, 653, 0, 34660, 12095, 150018, 29002, 44994, 10229, 49, 9709, 73552, 56804, 103, 183, 723, 3353, 131871, 39543, 23717, 11020, 12445, 46283, 2757, 61305, 105395, 65836, 30172, 19348, 16232, 588, 16640, 10997, 5299, 166605, 9621, 382630, 42845, 3058, 30, 40851, 8073, 5377, 82944, 5690, 15947, 17955, 5833, 29549, 86915, 13981, 1125, 72, 53869, 25538, 2274, 22518, 1050],
            [25615, 660, 0, 35706, 12501, 152300, 29115, 45088, 10264, 49, 9767, 75568, 57681, 103, 183, 728, 3399, 132543, 39909, 23926, 11101, 12445, 46619, 2793, 61701, 105603, 66054, 30471, 19516, 16262, 601, 16730, 11201, 5318, 166881, 9723, 383324, 44264, 3080, 30, 41148, 8231, 5377, 83203, 5811, 15947, 18795, 5898, 30343, 88523, 14313, 1127, 72, 54506, 25834, 2290, 22758, 1060],
            [26272, 663, 0, 36844, 12917, 155726, 29284, 45235, 10340, 49, 9799, 77326, 58414, 103, 185, 736, 3399, 133016, 40430, 24082, 11319, 12647, 47172, 2810, 62032, 105690, 66085, 30693, 19799, 16611, 609, 16851, 11315, 5345, 167103, 9845, 383944, 45114, 3101, 30, 41576, 8417, 5820, 83589, 5890, 16093, 19378, 5928, 31004, 90211, 14608, 1128, 72, 54886, 26158, 2322, 22932, 1079],
            [26912, 675, 0, 39185, 13191, 158961, 29427, 45349, 10403, 49, 9818, 80109, 59078, 103, 186, 736, 3462, 133639, 40786, 24179, 11411, 12647, 47706, 2819, 62409, 105885, 66269, 30882, 20152, 16857, 614, 17038, 11683, 5364, 167426, 9933, 384575, 45907, 3124, 30, 42010, 8645, 6098, 83978, 5951, 16164, 19990, 5966, 31751, 93569, 14937, 1131, 72, 55331, 26531, 2341, 23198, 1089],
            [27312, 695, 0, 40937, 13606, 162798, 29656, 45429, 10444, 49, 9847, 82719, 60030, 103, 188, 744, 3632, 134185, 41013, 24460, 11644, 12995, 48634, 2836, 62969, 106151, 66497, 31296, 20641, 17069, 630, 17231, 11854, 5436, 167703, 10065, 385142, 46934, 3166, 30, 42422, 8904, 6218, 84289, 6003, 16213, 20556, 6050, 32114, 97699, 15344, 1130, 73, 55775, 26784, 2376, 23456, 1114]
        ];

//表格设定
        var option = {
            baseOption: {
                //时间轴
                timeline: {
                    axisType: 'category',
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    playInterval: 200, //0.5s滚动一次
                    // realtime = true,
                    symbolSize: 1,
                    left: '5%',
                    right: '5%',
                    bottom: '0%',
                    width: '90%',
                   // itemStyle: {
                   //  borderWidth: 0
                   //  },
                    controlStyle: {
                        show: true

                    },
                    // lineStyle:{
                    //     color:'yellow'
                    // },
                    label:{
                      color:'white'
                    },
                    data: days,
                    // itemStyle:{
                    //     normal:{color:'white'},
                    //
                    // },
                    tooltip: {
                        formatter: days
                    },

                },

                tooltip: {
                    show: true,
                    formatter: function(params) {
                        return params.name + '：' + params.value
                    },
                },
                //热力地图设置此处可设置热力地图的颜色和变化范围
                visualMap: {
                    type: 'piecewise',
                    pieces: [{
                        min: 100001,
                        color: '#BB0000'
                    },
                        {
                            min: 50001,
                            max: 100000,
                            color: '#C62B2B' // #73240D
                        },
                        {
                            min: 25001,
                            max: 50000,
                            color: '#D25555'
                        },
                        {
                            min: 1001,
                            max: 25000,
                            color: '#DD8080'
                        },
                        {
                            min: 11,
                            max: 1000,
                            color: '#E8AAAA'
                        },
                        {
                            min: 1,
                            max: 10,
                            color: '#F4D5D5'
                        },
                        {
                            value: 0,
                            color: 'rgba(98,98,98,0)'

                        }
                    ],
                    orient: 'vertical',
                    itemWidth: 25,
                    itemHeight: 15,
                    showLabel: true,
                    seriesIndex: [0],

                    textStyle: {
                        color: '#36918e'
                    },
                    bottom: '10%',
                    left: "5%",
                },
                //图的相对位置
                grid: {
                    right: '5%',
                    top: '20%',
                    bottom: '10%',
                    width: '20%'
                },
                //右部柱状图的显示范围
                xAxis: {
                    'type': 'log',
                    // min: 0,
                    // max: 300000,
                    show: false
                },
                yAxis: [{
                    inverse: true,
                    offset: '2',
                    'type': 'category',
                    data: '',
                    nameTextStyle: {
                        color: '#fff'
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        //rotate:45,
                        textStyle: {
                            fontSize: 12,
                            color: '#36918e',
                        },
                        interval: 0
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#333'
                        },
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#333'
                        }
                    },
                }],
                geo: {
                    map: 'USA',
                    right: '35%',
                    left: '5%',
                    label: {
                        emphasis: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            areaColor: '#90EE90'
                        }
                    }
                },
                series: [{
                    name: 'mapSer',
                    type: 'map',
                    map: 'USA',
                    roam: false,
                    geoIndex: 0,
                    label: {
                        show: false,
                    },
                },
                    {
                        'name': '',
                        'type': 'bar',
                        zlevel: 2,
                        barWidth: '30%',
                        label: {
                            normal: {
                                show: true,
                                fontSize: 14,
                                position: 'right',
                                formatter: '{c}'
                            }
                        },
                    }
                ],

            },
            animationDurationUpdate: 3000,
            animationEasingUpdate: 'quinticInOut',
            options: []
        };
// 从所有数据中筛选出当日最高的10个
        for (var n = 0; n < days.length; n++) {

            var res = [];
            for (j = 0; j < data[n].length; j++) {
                res.push({
                    name: country[j],
                    value: data[n][j]
                });
            }
            //遍历这个二维数组，将每个国家的确诊人数和国家名称存储为一个对象，然后将这些对象存储到一个名为res的数组中。
            res.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6);
            //res数组中的确诊人数值从大到小排序，然后从中取出前6个对象，并返回一个新数组。该新数组被存储在原变量res中，以替换旧数组。因此，res现在包含确诊人数最高的6个国家的对象。
            res.sort(function(a, b) {
                return a.value - b.value;
            });
            //res数组中的确诊人数值从小到大排序。这样一来，res中确诊人数最低的国家将排在最前面
            var res1 = [];
            var res2 = [];
            for (t = 0; t < 10; t++) {
                res1[t] = res[res.length - 1 - t].name;
                res2[t] = res[res.length - 1 - t].value;
            }
            //遍历了最初res数组中最高的6个确诊人数国家，以构建两个数组。res1数组包含了最高的6个确诊人数国家的名称，而res2数组包含了相应的确诊人数值。
            // console.log(res1);
            // console.log("----------------");
            // console.log(country);
            option.options.push({
                title: [{
                    text: "美国疫情地图",
                    textStyle: {
                        color: '#e0e7e3',
                        fontSize: 28
                    },
                    left: 10,
                    top: 80,
                },
                    {
                        show: true,
                        text: '感染人数前十地区',
                        textStyle: {
                            color: '#eae5e5',
                            fontSize: 18
                        },
                        right: '10%',
                        top: '15%'
                    }
                ],
                yAxis: {
                    data: res1,
                },
                series: [{
                    type: 'map',
                    data: res
                }, {
                    type: 'bar',
                    data: res2,
                    // 色彩方案1-------------------------------------------------------------------------
                    itemStyle: {
                        normal: {
                            //这里是重点
                            color: function(params) {
                                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ['#BB0000', '#C21A1A', '#C93333', '#CF4D4D', '#D66666', '#DD8080', '#E49999', '#EBB3B3', '#F1CCCC', '#F8E6E6'];
                                return colorList[params.dataIndex]
                            }
                        }
                    }

                    // 色彩方案2-------------------------------------------------------------------------
                    // itemStyle: {
                    //     normal: {
                    //         color: function (params) {
                    //             // 设置柱状图的颜色
                    //             var colorList = [{
                    //                 colorStops: [{
                    //                     offset: 0,
                    //                     color: '#990000' // 0% 处的颜色 #FF0000
                    //                 }, {
                    //                     offset: 1,
                    //                     color: '#990000' // 100% 处的颜色 #990000
                    //                 }]
                    //             },
                    //             {
                    //                 colorStops: [{
                    //                     offset: 0,
                    //                     color: '#E9B090' // 0% 处的颜色 #00C0FA
                    //                 }, {
                    //                     offset: 1,
                    //                     color: '#E9B090' // 100% 处的颜色 #2F95FA
                    //                 }]
                    //             }
                    //             ];
                    //             if (params.dataIndex < 3) {  //前3名用colorList[0]中的颜色，后面的用colorList[1]中的颜色
                    //                 return colorList[0]
                    //             } else {
                    //                 return colorList[1]
                    //             }
                    //         },
                    //     }
                    // },
                }]
            });
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }





    function ceshis7() {
        var myChart = echarts.init(document.getElementById('chart_1'));


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


});