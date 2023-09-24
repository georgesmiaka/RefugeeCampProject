import json
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt

with open('/home/gmiak/Master_thesis/refugee_camp_project/server/data/ajuong/camp_boundaries.geojson') as f:
    data = json.load(f)

df = gpd.read_file('/home/gmiak/Master_thesis/refugee_camp_project/server/data/doro/camp_boundaries.geojson')
#df.head()
df.plot(figsize=(6, 6))
#plt.show()
plt.savefig("/home/gmiak/Master_thesis/refugee_camp_project/server/data/assets/img.png")