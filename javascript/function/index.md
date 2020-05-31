上面说了当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。

同时又说了当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution contexts)"。

那么所说的是指，由于 JS 是一段一段执行，执行上下文就是我们所理解的“段”。

建议将第一句话更为“当执行一段代码时，会进行一个‘准备工作’，这个工作不仅包含了预编译阶段的‘变量提升、函数提升’等，还包含了执行阶段~”