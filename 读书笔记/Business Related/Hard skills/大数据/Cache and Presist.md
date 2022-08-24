## Cache and Presist

Spark SQL在重复计算中非常耗时，可以使用多种方法缓存中间结果。

#### 1、直接保存结果

保存结果到 spark-warehouse 中，并再次加载

```python
res.write.saveAsTable("table_name")

spark.table("table_name").
      createOrReplaceTempView("test")
```

#### 2、使用Cache

使用Cache方法后，需要再调用以完成计算

```python
res = spark.sql(query)
res.cache()
res.show(5)
```

Cache的保存方式是，如果能保存再内存则保存再内存，不行则保存再硬盘

#### 3、使用Presist

```python
res = spark.sql(query)
res.persist(pyspark.StorageLevel.DISK_ONLY)
res.show(5)
```

