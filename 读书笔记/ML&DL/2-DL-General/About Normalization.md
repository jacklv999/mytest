## About Normalization

 pre-norm 和 post-norm 的区别:

- **pre-norm**: $x_{n+1}=x_n+f(norm(x_n))$ 其中第二项的方差由于有 norm 是不随层数变化的，于是 x 的方差会在主干上随层数积累。到了深层以后，单层对主干的影响可以视为小量，而不同层的 f 统计上是相似的，于是有:
    $$
    x_{n+2}=x_{n+1}+f(norm(x_{n+1}))=x_n+f(norm(x_n))+f(norm(x_{n+1}))\\
    \approx x_n+2f(norm(x_n)) 
    $$
    

    这样训练出来的深层 ResNet or Transformer，深层部分实际上更像扩展了模型宽度，所以相对好训练，但某种意义上并不是真正的 deep.

- **post-norm**: $x_{n+1}=norm(x_n+f(x_n))$  则保证了主干方差恒定，每层对 x 都可能有较大影响，代价则是模型结构中没有从头到尾的恒等路径，梯度难以控制。通常认为会更难收敛，但训练出来的效果更好。