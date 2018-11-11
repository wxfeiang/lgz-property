
    // 树形结构  具体多少节点是情况而定
    //  文档地址

    layui.use('tree', function () {
        var tree = layui.tree;

        layui.tree({
            elem: '#demo' //传入元素选择器
                ,
            nodes: [{
                name: '甘肃省',
                children: [{
                    name: '定西市',
                   
                    children: [{
                        name: '陇西县',
                       
                    }]
                }]
            },
            {
                name: '甘肃省 ',
                children: [{
                    name: '兰州市',
                  
                    children: [{
                        name: '城关区',
                        children: [{
                            name: '高新区',
                           
                        }]
                    }]
                }]
            },
            
        
        
        
          ]
        });
    });