
describe('测试', () => {
    // describe 描述模块, it描述输出值 （单元测试）, 和expect(chai 期望值)
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
            cy.visit('/');
    });

    it('测试是否包含指定文案', () => {
        cy.contains('转大写');
        cy.contains('转大写').should('have.class', 'button')
    });

    it('test then', () => {
        cy.get('img').then(($el)=>{//不建议使用 cypress 语法本身包含了promise
            var  href= $el.prop('src');
            console.log(href)
            $el.prop('src','test')
            // return href.replace(/png/,'');
            })

        
    });
    
    
    // it('获取指定元素', () => {
    //     cy.get('.result').contains('转大写');
    // }); 
    it('获取转大小写', () => {
        cy.get('.input')
      .type('fake')
      .should('have.value', 'fake')
      cy.contains('转大写').click()
      cy.get('.result').contains('FAKE')
    });
    it('add', () => {
      cy.get('button').contains('add').click()
      cy.get('ul li').should('have.length',3);
    });
    it('add', () => {
        cy.get('button').contains('add').click()
        cy.get('ul li').should('have.length',5);
      });
})